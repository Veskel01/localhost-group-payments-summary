type SinglePaymentType = {
  amount: number;
  payed: number;
  notPayed: number;
};

export type SummarizedPaymentsType = {
  first: SinglePaymentType;
  fifth: SinglePaymentType;
  tenth: SinglePaymentType;
  fifteenth: SinglePaymentType;
};

export type StudentDataType = {
  amount: number;
  name: string;
  lastPaymentDate: string;
  paidForCurrentMonth: boolean;
  formOfPayment: string;
  prepaidedMonths: number;
  dayOfPayment: number;
  actualMentor: string;
};

export type ApiResponseType = {
  studentsData: StudentDataType[];
  summarizedPayments: SummarizedPaymentsType;
};

export type PaymentsSummaryKeys = "first" | "fifth" | "tenth" | "fifteenth";
