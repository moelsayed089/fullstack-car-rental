import { Control, Controller, UseFormWatch } from "react-hook-form";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { PaymentForm } from "@/schema/paymentSchema";

export default function PaymentMethodSection({
  control,
  watch,
}: {
  control: Control<PaymentForm>;
  watch: UseFormWatch<PaymentForm>;
}) {
  const [method, setMethod] = useState<"credit" | "paypal">("credit");
  const selected = watch("paymentMethod");

  return (
    <section className="mb-5 bg-white p-5 rounded-md mt-5">
      <h2 className="text-xl font-semibold mb-5">Payment Method</h2>
      <div className="flex gap-6 mb-5">
        <Controller
          name="paymentMethod"
          control={control}
          render={({ field }) => (
            <>
              <div className="flex items-center gap-2">
                <RadioButton
                  inputId="credit"
                  value="credit"
                  checked={selected === "credit"}
                  onChange={(e) => {
                    field.onChange(e.value);
                    setMethod("credit");
                  }}
                  className={`custom-radio ${
                    selected === "credit"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                />
                <label htmlFor="credit">Credit Card</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioButton
                  inputId="paypal"
                  value="paypal"
                  checked={selected === "paypal"}
                  onChange={(e) => {
                    field.onChange(e.value);
                    setMethod("paypal");
                  }}
                  className={`custom-radio ${
                    selected === "paypal"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
            </>
          )}
        />
      </div>

      {method === "credit" ? (
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
                {...field}
                placeholder="Card Number"
              />
            )}
          />
          <Controller
            name="expiryDate"
            control={control}
            render={({ field }) => (
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
                {...field}
                placeholder="MM/YY"
              />
            )}
          />
          <Controller
            name="cardHolder"
            control={control}
            render={({ field }) => (
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
                {...field}
                placeholder="Card Holder"
              />
            )}
          />
          <Controller
            name="cvc"
            control={control}
            render={({ field }) => (
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
                {...field}
                placeholder="CVC"
              />
            )}
          />
        </div>
      ) : (
        <Controller
          name="paypalEmail"
          control={control}
          render={({ field }) => (
            <InputText
              className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
              {...field}
              placeholder="PayPal Email"
            />
          )}
        />
      )}
    </section>
  );
}
