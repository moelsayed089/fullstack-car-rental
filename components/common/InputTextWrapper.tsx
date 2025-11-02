import { InputText } from "primereact/inputtext";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputTextWrapperProps {
  type: string;
  placeholder: string;
  className?: string;
  register?: UseFormRegisterReturn;
}

const InputTextWrapper = ({
  type,
  placeholder,
  className,
  register,
}: InputTextWrapperProps) => {
  return (
    <InputText
      type={type}
      placeholder={placeholder}
      className={`w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0 ${className}`}
      {...register}
    />
  );
};

export default InputTextWrapper;
