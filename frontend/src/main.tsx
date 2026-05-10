import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import SignupPage from "./signupPage.tsx";
import StartPage from "./startPage.tsx";
import { AuthProvider } from "../context/useAuth.tsx";
import MoviePage from "./moviePage.tsx";
import ProfilePage from "./profilePage.tsx";
import MovieDetailsPage from "./movieDetailsPage.tsx";

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
      {
        path: "/movies",
        element: <MoviePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetailsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
