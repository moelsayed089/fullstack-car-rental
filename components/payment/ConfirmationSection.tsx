import { Control, Controller } from "react-hook-form";
import { Checkbox } from "primereact/checkbox";
import { PaymentForm } from "@/schema/paymentSchema";

export default function ConfirmationSection({
  control,
}: {
  control: Control<PaymentForm>;
}) {
  return (
    <section className="mb-3 bg-white p-5 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
      <div className="flex flex-col gap-2">
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                checked={field.value ?? false}
                onChange={(e) => field.onChange(e.checked)}
                className="custom-checkbox"
              />
              <label>I agree to terms & conditions</label>
            </div>
          )}
        />
        <Controller
          name="updates"
          control={control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                checked={field.value ?? false}
                onChange={(e) => field.onChange(e.checked)}
                className="custom-checkbox"
              />
              <label>Receive updates</label>
            </div>
          )}
        />
      </div>
    </section>
  );
}
