export default function LabelAndValue({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <span className=" w-full flex justify-between">
      <h1>{label}</h1>
      <h1>-</h1>
      <h1>{value}</h1>
    </span>
  );
}
