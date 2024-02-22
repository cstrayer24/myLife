import { ChangeEventHandler } from "react";

export default function ChangeStatusSelect({
  currentStatus,
  onChange,
}: {
  currentStatus: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) {
  const possibleStatus = [
    "not started",
    "started",
    "in progress",
    "near completion",
    "completed",
  ];
  const filteredStatuses = possibleStatus.filter((v) => v !== currentStatus);

  return (
    <select name="" id="" onChange={onChange}>
      <option value={currentStatus}>{currentStatus}</option>
      {filteredStatuses.map((v, i) => (
        <option key={i} value={v}>
          {v}
        </option>
      ))}
    </select>
  );
}
