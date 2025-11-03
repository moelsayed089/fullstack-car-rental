"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPayment } from "@/actions/payment.action";
import { PaymentForm, PaymentSchema } from "@/schema/paymentSchema";
import BillingSection from "./BillingSection";
import RentalSection from "./RentalSection";
import PaymentMethodSection from "./PaymentMethodSection";
import ConfirmationSection from "./ConfirmationSection";
import PrimaryButton from "../common/PrimaryButton";
import { useState } from "react";
import Spinner from "../common/Spinner";
import toast from "react-hot-toast";

export default function PaymentFormPage({
  carId,
  userId,
}: {
  carId: string;
  userId: string | null;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PaymentForm>({
    resolver: zodResolver(PaymentSchema),
    defaultValues: { paymentMethod: "credit", terms: false, updates: false },
  });

  const onSubmit = async (data: PaymentForm) => {
    setIsLoading(true);
    try {
      await createPayment({
        userId: userId!,
        billing: {
          name: data.name,
          phone: data.phone,
          address: data.address,
          city: data.city,
        },
        rental: {
          pickUpDate: data.pickUpDate,
          dropOffDate: data.dropOffDate,
          pickUpLocation: data.pickUpLocation,
          dropOffLocation: data.dropOffLocation,
          carId,
        },
        payment: {
          method: data.paymentMethod,
          cardNumber: data.cardNumber,
          expiryDate: data.expiryDate,
          cardHolder: data.cardHolder,
          cvc: data.cvc,
          paypalEmail: data.paypalEmail,
        },
      });

      toast.success("Payment successful", { position: "bottom-right" });
    } catch (errors) {
      toast.error("Error processing payment", { position: "bottom-right" });
      return errors;
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <BillingSection control={control} errors={errors} />
      <RentalSection control={control} errors={errors} />
      <PaymentMethodSection control={control} watch={watch} />
      <ConfirmationSection control={control} />
      <PrimaryButton disabled={userId === null} type="submit" className="">
        {isLoading ? (
          <>
            <Spinner className="mr-2" /> Processing.
          </>
        ) : (
          "Rent Now"
        )}
      </PrimaryButton>
    </form>
  );
}
