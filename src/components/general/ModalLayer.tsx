export default function ModalLayer({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className=" w-screen h-screen bg-ml-onyx/55 absolute top-0 left-0 z-50 grid place-items-center ">
      {children}
    </div>
  );
}
