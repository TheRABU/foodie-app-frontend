import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AllFoods from "../pages/AllFoodPage/AllFoods";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
        loader: () => fetch("http://localhost:5000/api/foods"),
      },
    ],
  },
]);
