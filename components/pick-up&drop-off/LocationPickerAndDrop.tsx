import { Dropdown } from "primereact/dropdown";

interface LocationPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder: string;
  className?: string;
}
const LocationPickerAndDrop = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  className,
}: LocationPickerProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="location-picker"
        className="text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <Dropdown
        id="location-picker"
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
  );
};

export default LocationPickerAndDrop;
