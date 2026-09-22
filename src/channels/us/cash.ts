import { createCashPaymentChannel } from "../shared.js";

export const cashUsUsdPaymentChannel = createCashPaymentChannel({
  id: "cash_us_usd",
  country: "US",
  currency: "USD",
});
