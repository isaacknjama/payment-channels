import {
  NormalizationKind,
  PaymentChannelAutomation,
  PaymentChannelGroup,
  PaymentFieldType,
  ValidationRuleKind,
  definePaymentChannelSchema,
} from "../../core.js";
import { descriptionField, mobileReferenceEvidence } from "../shared.js";

export const tnmMpambaMerchantMwMwkPaymentChannel = definePaymentChannelSchema({
  id: "tnm_mpamba_merchant_mw_mwk",
  version: 2,
  display: {
    label: "TNM Mpamba merchant",
    shortLabel: "Mpamba merchant",
    description: "TNM Mpamba Pay Merchant code payment.",
    icon: "tnm-mpamba",
    group: PaymentChannelGroup.MobileMoney,
  },
  network: { id: "tnm_mpamba", label: "TNM Mpamba", country: "MW", currency: "MWK" },
  support: {
    automation: PaymentChannelAutomation.Manual,
  },
  fields: [
    {
      key: "merchantCode",
      label: "Merchant code",
      type: PaymentFieldType.Text,
      required: true,
      placeholder: "6003070",
      normalize: [NormalizationKind.Trim, NormalizationKind.DigitsOnly],
      validation: [
        {
          kind: ValidationRuleKind.Pattern,
          pattern: "^\\d{5,7}$",
          message: "Use a 5-7 digit merchant code",
        },
      ],
    },
    descriptionField,
  ],
  detailRows: [
    {
      key: "merchantCode",
      label: "Merchant code",
      fields: ["merchantCode"],
      copyable: true,
    },
  ],
  evidence: mobileReferenceEvidence,
});
