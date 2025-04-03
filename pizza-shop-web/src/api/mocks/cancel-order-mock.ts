import { HttpResponse, http } from "msw";
import { CancelOrderProps } from "../cancel-order";

export const canceledOrderMock = http.patch<CancelOrderProps, never, never>(
  "/orders/:orderId/canceled",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
