import { api } from "@/lib/axios";

export interface RegistersRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function RegistersRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegistersRestaurantBody) {
  await api.post("/restaurants", { restaurantName, managerName, email, phone });
}
