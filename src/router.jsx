import { createBrowserRouter } from "react-router";

import { HomePage } from "./pages/home/HomePage";
import { ContactPage } from "./pages/contact/ContactPage";
import { WePage } from "./pages/we/WePage";
import { GaleryPage } from "./pages/galery/GaleryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/we",
    element: <WePage />,
  },
  {
    path: "/galery",
    element: <GaleryPage />,
  },
]);
