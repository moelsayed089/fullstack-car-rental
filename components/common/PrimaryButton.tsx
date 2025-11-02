"use client";

import { Button } from "primereact/button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: string;
  onClick?: () => void;
}

const PrimaryButton = ({
  children,
  className,
  icon,
  onClick,
}: PrimaryButtonProps) => (
  <Button
    className={`bg-blue-600 px-5 py-2 rounded-md focus:ring-0! text-white hover:bg-blue-700 ${className}`}
    icon={icon}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default PrimaryButton;
