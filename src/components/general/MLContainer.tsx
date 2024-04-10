export default function MLContainer({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div
      className={` p-11 shadow-xl  drop-shadow-xl rounded-md border ${className}`}
    >
      {children}
    </div>
  );
}
