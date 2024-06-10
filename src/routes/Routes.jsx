import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AllFoods from "../pages/AllFoodPage/AllFoods";
import SingleFoodPage from "../pages/SingleFoodPage/SingleFoodPage";
import PurchaseNowPage from "../pages/FoodPurchasePage/PurchaseNowPage";
import SignUp from "../pages/SignUpPage/SignUp";
import LogIn from "../pages/LoginPage/LogIn";
import PrivateRoutes from "./PrivateRoute";
import MyDashBoard from "../pages/DashboardPage/MyDashBoard";
import DashBoardLayout from "../layouts/DashBoardLayout";

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
        // loader: () => fetch("http://localhost:5000/api/foods"),
      },
      {
        path: "/single-food/:id",
        element: <SingleFoodPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/foods/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoutes>
            <PurchaseNowPage />,
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/foods/${params.id}`),
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <MyDashBoard />,
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
