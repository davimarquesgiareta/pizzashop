import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors closeButton/>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
