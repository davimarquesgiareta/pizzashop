import { HttpResponse, http } from "msw";
import { DispatchOrderProps } from "../dispatch-order";

export const dispatchOrderMock = http.patch<DispatchOrderProps, never, never>(
  "/orders/:orderId/dispatch",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
