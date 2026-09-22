import type { PaymentChannelSchema } from "../core.js";

export { createCashPaymentChannel } from "./shared.js";

export { cashAoAoaPaymentChannel } from "./ao/cash.js";
export { cashBiBifPaymentChannel } from "./bi/cash.js";
export { cashBwBwpPaymentChannel } from "./bw/cash.js";
export { cashEtEtbPaymentChannel } from "./et/cash.js";
export { cashGbGbpPaymentChannel } from "./gb/cash.js";
export { cashInInrPaymentChannel } from "./in/cash.js";
export { airtelMoneyKeKesPaymentChannel } from "./ke/airtel_money.js";
export { cashKeKesPaymentChannel } from "./ke/cash.js";
export { mpesaPaybillKeKesPaymentChannel } from "./ke/mpesa_paybill.js";
export { mpesaPhoneKeKesPaymentChannel } from "./ke/mpesa_phone.js";
export { mpesaPochiKeKesPaymentChannel } from "./ke/mpesa_pochi.js";
export { mpesaTillKeKesPaymentChannel } from "./ke/mpesa_till.js";
export { pesalinkAccountKeKesPaymentChannel } from "./ke/pesalink_account.js";
export { cashLsLslPaymentChannel } from "./ls/cash.js";
export { cashMuMurPaymentChannel } from "./mu/cash.js";
export { airtelMoneyMwMwkPaymentChannel } from "./mw/airtel_money.js";
export { airtelMoneyTillMwMwkPaymentChannel } from "./mw/airtel_money_till.js";
export { cashMwMwkPaymentChannel } from "./mw/cash.js";
export { tnmMpambaMwMwkPaymentChannel } from "./mw/tnm_mpamba.js";
export { tnmMpambaMerchantMwMwkPaymentChannel } from "./mw/tnm_mpamba_merchant.js";
export { cashMzMznPaymentChannel } from "./mz/cash.js";
export { cashNaNadPaymentChannel } from "./na/cash.js";
export { cashNgNgnPaymentChannel } from "./ng/cash.js";
export { cashPkPkrPaymentChannel } from "./pk/cash.js";
export { cashRwRwfPaymentChannel } from "./rw/cash.js";
export { cashSsSspPaymentChannel } from "./ss/cash.js";
export { cashSzSzlPaymentChannel } from "./sz/cash.js";
export { cashTzTzsPaymentChannel } from "./tz/cash.js";
export { cashUgUgxPaymentChannel } from "./ug/cash.js";
export { cashUsUsdPaymentChannel } from "./us/cash.js";
export { cashZaZarPaymentChannel } from "./za/cash.js";
export { payshapAccountZaZarPaymentChannel } from "./za/payshap_account.js";
export { payshapShapidZaZarPaymentChannel } from "./za/payshap_shapid.js";
export { cashZmZmwPaymentChannel } from "./zm/cash.js";

import { cashAoAoaPaymentChannel } from "./ao/cash.js";
import { cashBiBifPaymentChannel } from "./bi/cash.js";
import { cashBwBwpPaymentChannel } from "./bw/cash.js";
import { cashEtEtbPaymentChannel } from "./et/cash.js";
import { cashGbGbpPaymentChannel } from "./gb/cash.js";
import { cashInInrPaymentChannel } from "./in/cash.js";
import { airtelMoneyKeKesPaymentChannel } from "./ke/airtel_money.js";
import { cashKeKesPaymentChannel } from "./ke/cash.js";
import { mpesaPaybillKeKesPaymentChannel } from "./ke/mpesa_paybill.js";
import { mpesaPhoneKeKesPaymentChannel } from "./ke/mpesa_phone.js";
import { mpesaPochiKeKesPaymentChannel } from "./ke/mpesa_pochi.js";
import { mpesaTillKeKesPaymentChannel } from "./ke/mpesa_till.js";
import { pesalinkAccountKeKesPaymentChannel } from "./ke/pesalink_account.js";
import { cashLsLslPaymentChannel } from "./ls/cash.js";
import { cashMuMurPaymentChannel } from "./mu/cash.js";
import { airtelMoneyMwMwkPaymentChannel } from "./mw/airtel_money.js";
import { airtelMoneyTillMwMwkPaymentChannel } from "./mw/airtel_money_till.js";
import { cashMwMwkPaymentChannel } from "./mw/cash.js";
import { tnmMpambaMwMwkPaymentChannel } from "./mw/tnm_mpamba.js";
import { tnmMpambaMerchantMwMwkPaymentChannel } from "./mw/tnm_mpamba_merchant.js";
import { cashMzMznPaymentChannel } from "./mz/cash.js";
import { cashNaNadPaymentChannel } from "./na/cash.js";
import { cashNgNgnPaymentChannel } from "./ng/cash.js";
import { cashPkPkrPaymentChannel } from "./pk/cash.js";
import { cashRwRwfPaymentChannel } from "./rw/cash.js";
import { cashSsSspPaymentChannel } from "./ss/cash.js";
import { cashSzSzlPaymentChannel } from "./sz/cash.js";
import { cashTzTzsPaymentChannel } from "./tz/cash.js";
import { cashUgUgxPaymentChannel } from "./ug/cash.js";
import { cashUsUsdPaymentChannel } from "./us/cash.js";
import { cashZaZarPaymentChannel } from "./za/cash.js";
import { payshapAccountZaZarPaymentChannel } from "./za/payshap_account.js";
import { payshapShapidZaZarPaymentChannel } from "./za/payshap_shapid.js";
import { cashZmZmwPaymentChannel } from "./zm/cash.js";

export const builtinPaymentChannels: readonly PaymentChannelSchema[] = [
  cashAoAoaPaymentChannel,
  cashBiBifPaymentChannel,
  cashBwBwpPaymentChannel,
  cashEtEtbPaymentChannel,
  cashGbGbpPaymentChannel,
  cashInInrPaymentChannel,
  mpesaPhoneKeKesPaymentChannel,
  mpesaPochiKeKesPaymentChannel,
  mpesaTillKeKesPaymentChannel,
  mpesaPaybillKeKesPaymentChannel,
  pesalinkAccountKeKesPaymentChannel,
  airtelMoneyKeKesPaymentChannel,
  cashKeKesPaymentChannel,
  cashLsLslPaymentChannel,
  cashMuMurPaymentChannel,
  airtelMoneyMwMwkPaymentChannel,
  airtelMoneyTillMwMwkPaymentChannel,
  cashMwMwkPaymentChannel,
  tnmMpambaMwMwkPaymentChannel,
  tnmMpambaMerchantMwMwkPaymentChannel,
  cashMzMznPaymentChannel,
  cashNaNadPaymentChannel,
  cashNgNgnPaymentChannel,
  cashPkPkrPaymentChannel,
  cashRwRwfPaymentChannel,
  cashSsSspPaymentChannel,
  cashSzSzlPaymentChannel,
  cashTzTzsPaymentChannel,
  cashUgUgxPaymentChannel,
  cashUsUsdPaymentChannel,
  payshapShapidZaZarPaymentChannel,
  payshapAccountZaZarPaymentChannel,
  cashZaZarPaymentChannel,
  cashZmZmwPaymentChannel,
];
