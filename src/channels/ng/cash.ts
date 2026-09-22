import { createCashPaymentChannel } from "../shared.js";

export const cashNgNgnPaymentChannel = createCashPaymentChannel({
  id: "cash_ng_ngn",
  country: "NG",
  currency: "NGN",
});
