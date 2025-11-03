import z from "zod";

export const PaymentSchema = z
  .object({
    // Billing
    name: z.string().min(1, "Required"),
    phone: z.string().min(1, "Required"),
    address: z.string().min(1, "Required"),
    city: z.string().min(1, "Required"),

    // Rental Info
    pickUpDate: z.date({ required_error: "Required" }),
    pickUpTime: z.string().min(1, "Required"),
    pickUpLocation: z.string().min(1, "Required"),
    dropOffDate: z.date({ required_error: "Required" }),
    dropOffTime: z.string().min(1, "Required"),
    dropOffLocation: z.string().min(1, "Required"),

    // Payment
    paymentMethod: z.enum(["credit", "paypal"]),
    cardNumber: z.string().optional(),
    expiryDate: z.string().optional(),
    cardHolder: z.string().optional(),
    cvc: z.string().optional(),
    paypalEmail: z.string().optional(),

    // Confirmation
    terms: z.boolean().refine((val) => val, "You must accept terms"),
    updates: z.boolean().optional(),
  })
  .refine(
    (data) =>
      data.paymentMethod === "credit"
        ? data.cardNumber && data.expiryDate && data.cardHolder && data.cvc
        : data.paypalEmail,
    { message: "Payment info incomplete", path: ["paymentMethod"] }
  );

export type PaymentForm = z.infer<typeof PaymentSchema>;
