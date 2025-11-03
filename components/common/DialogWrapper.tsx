"use client";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
const DialogWrapper = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <PrimaryButton
        className=" "
        icon="pi pi-pen-to-square mr-2"
        onClick={() => setVisible(true)}
      >
        {label}
      </PrimaryButton>
      <Dialog
        draggable
        visible={visible}
        header={label}
        headerClassName="px-5 py-3"
        contentClassName="px-5 pb-5"
        className="w-[90vw] md:w-[50vw]"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        {children}
      </Dialog>
    </>
  );
};

export default DialogWrapper;
