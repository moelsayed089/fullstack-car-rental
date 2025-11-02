import { InputTextarea } from "primereact/inputtextarea";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputTextareaWrapperProps {
  rows: number;
  cols: number;
  placeholder: string;
  className?: string;
  register?: UseFormRegisterReturn;
  value?: string;
}

const InputTextareaWrapper = ({
  rows,
  cols,
  placeholder,
  className,
  register,
  value,
}: InputTextareaWrapperProps) => {
  return (
    <InputTextarea
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      value={value}
      {...register}
      className={`bg-gray-100 w-full px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0 ${className}`}
    />
  );
};

export default InputTextareaWrapper;
