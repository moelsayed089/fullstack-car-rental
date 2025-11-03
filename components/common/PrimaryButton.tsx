"use client";

import { Button } from "primereact/button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton = ({
  children,
  className,
  disabled,
  type,
  icon,
  onClick,
}: PrimaryButtonProps) => (
  <Button
    type={type}
    className={`bg-blue-600 px-5 py-2 rounded-md focus:ring-0! text-white hover:bg-blue-700 ${className}`}
    icon={icon}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default PrimaryButton;
