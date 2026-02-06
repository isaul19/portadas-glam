import { createBrowserRouter } from "react-router";

import { HomePage } from "./pages/home/HomePage";
import { ContactPage } from "./pages/contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
