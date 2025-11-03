import { Control, Controller, FieldErrors } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { PaymentForm } from "@/schema/paymentSchema";

export default function BillingSection({
  control,
  errors,
}: {
  control: Control<PaymentForm>;
  errors: FieldErrors<PaymentForm>;
}) {
  return (
    <section className="mb-6 bg-white p-5 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
                type="text"
                {...field}
                placeholder="Full Name"
              />
              {errors.name && (
                <small className="p-error">{errors.name.message}</small>
              )}
            </div>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
                type="tel"
                {...field}
                placeholder="Phone"
              />
              {errors.phone && (
                <small className="p-error">{errors.phone.message}</small>
              )}
            </div>
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
                type="text"
                {...field}
                placeholder="Address"
              />
              {errors.address && (
                <small className="p-error ">{errors.address.message}</small>
              )}
            </div>
          )}
        />
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
                type="text"
                {...field}
                placeholder="City"
              />
              {errors.city && (
                <small className="p-error">{errors.city.message}</small>
              )}
            </div>
          )}
        />
      </div>
    </section>
  );
}
