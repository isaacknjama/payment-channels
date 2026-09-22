import {
  NormalizationKind,
  PaymentChannelAutomation,
  PaymentChannelGroup,
  PaymentFieldType,
  ValidationRuleKind,
  definePaymentChannelSchema,
} from "../../core.js";
import { descriptionField, mobileReferenceEvidence } from "../shared.js";

export const airtelMoneyTillMwMwkPaymentChannel = definePaymentChannelSchema({
  id: "airtel_money_till_mw_mwk",
  version: 2,
  display: {
    label: "Airtel Money till",
    shortLabel: "Airtel till",
    description: "Airtel Money Malawi Buy Goods and Services till payment.",
    icon: "airtel-money",
    group: PaymentChannelGroup.MobileMoney,
  },
  network: { id: "airtel_money", label: "Airtel Money", country: "MW", currency: "MWK" },
  support: {
    automation: PaymentChannelAutomation.Manual,
  },
  fields: [
    {
      key: "tillNumber",
      label: "Till number",
      type: PaymentFieldType.Text,
      required: true,
      placeholder: "710300",
      normalize: [NormalizationKind.Trim, NormalizationKind.DigitsOnly],
      validation: [
        {
          kind: ValidationRuleKind.Pattern,
          pattern: "^\\d{5,7}$",
          message: "Use a 5-7 digit till number",
        },
      ],
    },
    descriptionField,
  ],
  detailRows: [
    {
      key: "tillNumber",
      label: "Till number",
      fields: ["tillNumber"],
      copyable: true,
    },
  ],
  evidence: mobileReferenceEvidence,
});
