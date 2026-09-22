import { createCashPaymentChannel } from "../shared.js";

export const cashGbGbpPaymentChannel = createCashPaymentChannel({
  id: "cash_gb_gbp",
  country: "GB",
  currency: "GBP",
});
