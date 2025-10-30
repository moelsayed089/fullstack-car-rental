"use client";

import { Button } from "primereact/button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ children, className }: PrimaryButtonProps) => (
  <Button
    className={`bg-blue-500 px-5 py-2 rounded-md focus:ring-0! ${className}`}
  >
    {children}
  </Button>
);

export default PrimaryButton;
