import { createCashPaymentChannel } from "../shared.js";

export const cashPkPkrPaymentChannel = createCashPaymentChannel({
  id: "cash_pk_pkr",
  country: "PK",
  currency: "PKR",
});
