import { ReactElement, useRef, useState } from "react";
import ImgIcon from "../iconComponents/ImgIcon";
import KeyWord from "./KeyWord";

export default function PathInfoForm() {
  //   const [pathName, setPathName] = useState("");

  let currFile: File;
  let fname: string;
  const [pathName, setPathName] = useState("");
  const [description, setDescription] = useState("");
  const [focusedStyle, setFocusedStyle] = useState("border");
  const [descFocusedStyle, setDescFocusedStyle] = useState("border");
  const [keywords, setKeywords] = useState<ReactElement[]>([]);
  const [keywordList, setKeywordList] = useState<string[]>([]);
  let currKeywordI = 0;
  const fiRef = useRef<HTMLInputElement>(null);
  return (
    <div className=" w-full h-full">
      <form
        action=""
        className=" h-[80%] w-full mt-6"
        onSubmit={async (ev) => {
          ev.preventDefault();

          const fr = new FileReader();

          fr.onload = async (ev: ProgressEvent<FileReader>) => {
            const fileBuff = ev.target?.result;
            if (!window.localStorage.getItem("pathImgUrl")) return;
            const url = window.localStorage.getItem("pathImgUrl");

            const req = await fetch(url as string, {
              method: "PUT",
              mode: "cors",
              body: fileBuff,
              headers: {
                "Content-Disposition": `attachment; filename="${fname}"`,
                "Content-type": currFile.type,
              },
            });
          };

          fr.readAsArrayBuffer(currFile);
          console.log(keywordList);
          console.log(description);
          console.log(pathName);
          const req = await fetch("/api/make-path", {
            method: "POST",
            body: JSON.stringify({
              pathName: pathName,
              description: description,
              fname,
              keywordList,
            }),
          });
        }}
      >
        <div className=" w-full h-20 flex flex-col mb-11">
          <div className=" w-full h-10 text-center">
            <label htmlFor="path_name" className="">
              path name
            </label>
          </div>

          <div className=" w-full h-10 flex  justify-center">
            <input
              type="text"
              id="path_name"
              onChange={(ev) => {
                setPathName(ev.target.value);
              }}
              className={` w-64 ${focusedStyle} border-b-ml-onyx outline-none px-5 `}
              onFocus={(ev) => {
                setFocusedStyle("border-2");
              }}
              onBlur={(ev) => {
                setFocusedStyle("border");
              }}
            />
          </div>
        </div>
        <div
          className=" w-full flex justify-center mb-2 cursor-pointer"
          onClick={(ev) => {
            setKeywords(
              keywords.concat(
                <KeyWord
                  blurHandle={(t) => {
                    setKeywordList(keywordList.concat(t));
                    console.log(keywordList);
                  }}
                />
              )
            );
          }}
        >
          <h2>keywords</h2>
          <span>+</span>
        </div>
        <div className=" w-full flex justify-center">{keywords}</div>

        <div className="w-full h-4/6 flex-col">
          <div className="w-full h-[20%] text-center">
            <label htmlFor="">Description:</label>
          </div>
          <div className=" w-full h-[80%] flex justify-center mb-5">
            <textarea
              name=""
              id=""
              onChange={(ev) => {
                setDescription(ev.target.value);
              }}
              cols={30}
              rows={10}
              className={` px-5 py-3 resize-none outline-none ${descFocusedStyle}  rounded-sm border-ml-onyx `}
              onFocus={(ev) => {
                setDescFocusedStyle("border-2");
              }}
              onBlur={(ev) => {
                setDescFocusedStyle("border");
              }}
            ></textarea>
          </div>
          <div className=" w-full h-10 flex  justify-center">
            <div>
              <div
                className=" cursor-pointer"
                onClick={(ev) => {
                  fiRef.current?.click();
                }}
              >
                <label htmlFor="" className=" cursor-pointer">
                  Thumbnail
                </label>
                <ImgIcon className=" h-6 w-6 inline" />
              </div>
              <input
                type="file"
                ref={fiRef}
                onChange={async (ev) => {
                  //call get signed url
                  if (!ev.target.files) return;

                  currFile = ev.target.files[0];
                  fname = `${
                    currFile.name.split(".")[0]
                  }-${window.crypto.randomUUID()}.${
                    currFile.name.split(".")[1]
                  }`;

                  const req = await fetch("/api/get-signed-url", {
                    method: "POST",
                    body: JSON.stringify({ imgPath: fname }),
                  });

                  if (req.ok) {
                    const res = await req.text();
                    window.localStorage.setItem("pathImgUrl", res);
                  }
                }}
                className=" hidden "
              />
            </div>
          </div>

          <div
            className=" w-full h-10 flex justify-center
          "
          >
            <button className=" bg-ml-Celadon  px-10 rounded-full text-white">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
