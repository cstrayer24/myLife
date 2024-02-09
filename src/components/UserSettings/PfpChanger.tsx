"use client";
import { useState } from "react";
import UserCircle from "../iconComponents/UserCircle";
import PencilSquare from "../iconComponents/PencilSquare";
import PfpComp from "../general/PfpComp";

export default function PfpChanger({
  username,
  pfpUrl,
}: {
  username: string;
  pfpUrl: string;
}) {
  const [iconShown, setIconShown] = useState(false);
  return (
    <div className="w-full flex bg-ml-Celadon justify-center border-b border-b-white mb-5 py-5 flex-col">
      <div
        className=" cursor-pointer relative flex justify-center"
        onMouseOver={(e) => {
          setIconShown(true);
        }}
        onMouseLeave={(e) => {
          setIconShown(false);
        }}
        onClick={(e) => {
          if (typeof document !== "undefined") {
            const fp = document.querySelector("#imgPicker") as HTMLInputElement;
            fp.click();
          }
        }}
      >
        <input
          type="file"
          name=""
          id="imgPicker"
          className=" hidden"
          onChange={(e) => {
            const el = document.querySelector("#imgPicker") as HTMLInputElement;
            const fr = new FileReader();

            fr.onload = async (ev: ProgressEvent<FileReader>) => {
              const data = ev.target?.result;

              const url = window.localStorage.getItem("pfp-url");
              try {
                const fname = `${username}_pfp`;
                if (!e.target.files) return;
                const response = await fetch(url as string, {
                  method: "PUT",
                  mode: "cors",
                  body: data,
                  headers: {
                    // Set the correct MIME type of the file
                    "Content-Disposition": `attachment; filename="${fname}.${
                      e.target.files[0].type.split("/")[1]
                    }"`, // Set the desired filename
                    "Content-type": e.target.files[0].type,
                  },
                });
                console.log(await response);

                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                  const req = await fetch(`/api/set-pfp-url`, {
                    method: "POST",
                    body: JSON.stringify({ fname: fname }),
                  });

                  console.log(await req.json());
                }
              } catch (error) {
                console.error("Error uploading image:", error);
              }
            };
            if (!e.target.files) return;
            fr.readAsArrayBuffer(e.target.files[0]);
          }}
        />
        <div>
          {iconShown ? (
            <PencilSquare className="relative  top-full left-full w-6 h-6" />
          ) : (
            <></>
          )}
          <PfpComp
            iconClassName="w-20 h-20"
            pfpUrl={pfpUrl}
            imgSize={[100, 150]}
            className=" w-20 h-20"
          />
        </div>
      </div>
      <div className=" w-full flex justify-center mt-4 text-2xl">
        {" "}
        <h2>{username}</h2>
      </div>
    </div>
  );
}
