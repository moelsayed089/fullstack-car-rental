export interface PaymentData {
  billing: {
    name: string;
    phone: string;
    address: string;
    city: string;
  };
  rental: {
    pickUpDate: Date;
    dropOffDate: Date;
    pickUpLocation: string;
    dropOffLocation: string;
    carId: string;
  };
  payment: {
    method: "credit" | "paypal";
    cardNumber?: string;
    expiryDate?: string;
    cardHolder?: string;
    cvc?: string;
    paypalEmail?: string;
  };
  userId: string;
}
