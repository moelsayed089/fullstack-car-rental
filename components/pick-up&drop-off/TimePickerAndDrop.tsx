import { Dropdown } from "primereact/dropdown";

interface TimePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder: string;
  className?: string;
}
const TimePickerAndDrop = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  className,
}: TimePickerProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="time-picker"
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Dropdown
          id="time-picker"
          value={value}
          onChange={(e) => onChange(e.value)}
          options={options}
          placeholder={placeholder}
          className={`text-gray-500 shadow-none border-0 focus:ring-0 ${className} `}
          itemTemplate={(option) => (
            <div className="flex items-center gap-2">
              <span className="text-sm  p-2">{option.label}</span>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default TimePickerAndDrop;
