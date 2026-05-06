import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import SignupPage from "./signupPage.tsx";
import StartPage from "./startPage.tsx";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <SignupPage />,
      },
      {
        path: "/",
        element: <StartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
