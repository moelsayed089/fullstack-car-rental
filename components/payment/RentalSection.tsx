import { Control, Controller, FieldErrors } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { PaymentForm } from "@/schema/paymentSchema";

export default function RentalSection({
  control,
  errors,
}: {
  control: Control<PaymentForm>;
  errors: FieldErrors<PaymentForm>;
}) {
  return (
    <section className="mb-5 bg-white p-5 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Rental Information</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Controller
          name="pickUpDate"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Calendar
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0 "
                {...field}
                placeholder="Pick-up Date"
                showIcon
              />
              {errors.pickUpDate && (
                <small className="p-error">{errors.pickUpDate.message}</small>
              )}
            </div>
          )}
        />
        <Controller
          name="pickUpTime"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0 "
                {...field}
                placeholder="Pick-up Time"
              />
              {errors.pickUpTime && (
                <small className="p-error">{errors.pickUpTime.message}</small>
              )}
            </div>
          )}
        />
        <Controller
          name="pickUpLocation"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0 "
                {...field}
                placeholder="Pick-up Location"
              />
              {errors.pickUpLocation && (
                <small className="p-error">
                  {errors.pickUpLocation.message}
                </small>
              )}
            </div>
          )}
        />

        <Controller
          name="dropOffDate"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Calendar
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0 "
                {...field}
                placeholder="Drop-off Date"
                showIcon
              />
              {errors.dropOffDate && (
                <small className="p-error">{errors.dropOffDate.message}</small>
              )}
            </div>
          )}
        />
        <Controller
          name="dropOffTime"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0 "
                {...field}
                placeholder="Drop-off Time"
              />
              {errors.dropOffTime && (
                <small className="p-error">{errors.dropOffTime.message}</small>
              )}
            </div>
          )}
        />
        <Controller
          name="dropOffLocation"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <InputText
                className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0 "
                {...field}
                placeholder="Drop-off Location"
              />
              {errors.dropOffLocation && (
                <small className="p-error">
                  {errors.dropOffLocation.message}
                </small>
              )}
            </div>
          )}
        />
      </div>
    </section>
  );
}
