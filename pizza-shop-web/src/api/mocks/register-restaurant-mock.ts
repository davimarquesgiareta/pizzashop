import { http, HttpResponse } from "msw";
import { RegistersRestaurantBody } from "../register-restaurant";

export const registerRestaurantMock = http.post<never, RegistersRestaurantBody>(
  "/restaurants",
  async ({ request }) => {
    const { restaurantName } = await request.json();

    if (restaurantName === "Pizza Shop") {
      return new HttpResponse(null, {
        status: 201,
      });
    }

    return new HttpResponse(null, { status: 400 });
  },
);
