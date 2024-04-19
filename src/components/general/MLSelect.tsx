import { ChangeEventHandler } from "react";

export default function MLSelect({
  placeholder,
  values,
  onChange,
  id,
  className,
}: {
  placeholder?: string;
  values: string[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  id?: string;
  className?: string;
}) {
  return (
    <select
      name=""
      id={id ? id : ""}
      onChange={onChange}
      className={className ? className : ""}
    >
      <option value="">
        {placeholder ? placeholder : "--select a value--"}
      </option>
      {values.map((v, i) => (
        <option key={i} value={v}>
          {v}
        </option>
      ))}
    </select>
  );
}
