import { createCashPaymentChannel } from "../shared.js";

export const cashInInrPaymentChannel = createCashPaymentChannel({
  id: "cash_in_inr",
  country: "IN",
  currency: "INR",
});
