import { HttpResponse, http } from "msw";
import { GetMonthOrdersAmountResponse } from "../get-month-orders-amount";

export const getMonthOrderAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("/metrics/month-orders-amount", () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  });
});
