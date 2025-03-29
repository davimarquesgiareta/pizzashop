import { api } from "@/lib/axios";

export interface GetDayOrdersAmountResponse {
  amount: number;
  diffFromYesterday: number;
}

export async function getDayOrderAmount() {
  const response = await api.get<GetDayOrdersAmountResponse>(
    "/metrics/day-orders-amount",
  );

  return response.data;
}
