import getContentForPaymentKeys from "Helpers/getContentForPaymentKeys";
import { PaymentsSummaryKeys, SummarizedPaymentsType } from "Types/App.types";

function createRow({
  name,
  amount,
  payed,
  notPayed,
}: {
  name: string;
  amount: number;
  payed: number;
  notPayed: number;
}) {
  return { name, amount, payed, notPayed };
}

const getPaymentTableRows = (paymentsData: SummarizedPaymentsType) => {
  const { amountTotal, payedTotal, notPayedTotal } = Object.entries(paymentsData).reduce(
    (acc, [key, { amount, payed, notPayed }]) => {
      acc.amountTotal += amount;
      acc.payedTotal += payed;
      acc.notPayedTotal += notPayed;

      return acc;
    },
    {
      amountTotal: 0,
      payedTotal: 0,
      notPayedTotal: 0,
    },
  );

  const basicRows = Object.entries(paymentsData).map(([key, { ...data }]) => {
    const name = getContentForPaymentKeys(key as PaymentsSummaryKeys);

    return createRow({ name, ...data });
  });

  const summaryRow = createRow({
    name: "Suma:",
    payed: payedTotal,
    amount: amountTotal,
    notPayed: notPayedTotal,
  });

  const rows = [...basicRows, summaryRow];

  return rows;
};

export default getPaymentTableRows;
