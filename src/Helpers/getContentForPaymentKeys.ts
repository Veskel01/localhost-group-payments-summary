import { PaymentsSummaryKeys } from "Types/App.types";

const getContentForPaymentKeys = (keys: PaymentsSummaryKeys) => {
  switch (keys) {
    case "first":
      return "Do Pierwszego:";
    case "fifth":
      return "Do Piątego:";
    case "tenth":
      return "Do Dziesiątego:";
    case "fifteenth":
      return "Do Piętnastego:";
  }
};

export default getContentForPaymentKeys;
