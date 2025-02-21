import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/app/dashboard";
import { SigIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/sign-in", element: <SigIn /> },
]);
