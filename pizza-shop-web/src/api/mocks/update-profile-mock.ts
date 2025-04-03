import { http, HttpResponse } from "msw";
import { UpdateProfilebody } from "../update-profile";

export const updateProfiletMock = http.put<never, UpdateProfilebody>(
  "/profile",
  async ({ request }) => {
    const { name } = await request.json();

    if (name === "Davi Pizza") {
      return new HttpResponse(null, {
        status: 204,
      });
    }

    return new HttpResponse(null, { status: 400 });
  },
);
