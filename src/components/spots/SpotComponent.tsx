export default function SpotComponent({
  name,
  image,
  link,
  address,
}: {
  name: string;
  image: string;
  link: string;
  address: string;
}) {
  return (
    <div className=" w-28 h-28 grid grid-rows-2">
      <div className=" bg-ml-forest bg-cover">
        <div className="w-full h-full"></div>
      </div>
      <div className=" bg-ml-onyx"></div>
    </div>
  );
}
