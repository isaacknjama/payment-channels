import { createCashPaymentChannel } from "../shared.js";

export const cashMuMurPaymentChannel = createCashPaymentChannel({
  id: "cash_mu_mur",
  country: "MU",
  currency: "MUR",
});
