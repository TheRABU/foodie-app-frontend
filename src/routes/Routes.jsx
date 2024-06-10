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
import ErrorPage from "../pages/404ErrorPage/ErrorPage";
import OurGallery from "../pages/GalleryPage/OurGallery";
import AddGalleryItem from "../pages/AddItemToGallery/AddGalleryItem";
import MyAddedItems from "../pages/MyAddedFoodItemsPage/MyAddedItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: "/gallery",
        element: <OurGallery />,
      },
    ],
  },
  {
    path: "/",
    element: <DashBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <MyDashBoard />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-gallery",
        element: (
          <PrivateRoutes>
            <AddGalleryItem />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-requests/:email",
        element: (
          <PrivateRoutes>
            <MyAddedItems />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
