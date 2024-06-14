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
import MyAddedItems from "../pages/MyAddedFoodItemsPage/MyAddedItems";
import MyOrders from "../pages/MyPurchasePage/MyOrders";
import AddFoodRequest from "../pages/AddFoodRequest/AddFoodRequest";
import AddReviewGallery from "../pages/AddReviewToGallery/AddReviewGallery";
import MyFoodItemReviews from "../pages/MyFoodReviewsPage/MyFoodItemReviews";

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
          fetch(`https://foodie-bite.sifatulrabbi.com/api/foods/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoutes>
            <PurchaseNowPage />,
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://foodie-bite.sifatulrabbi.com/api/foods/${params.id}`),
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
        path: "/request",
        element: (
          <PrivateRoutes>
            <AddFoodRequest />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-requests",
        element: (
          <PrivateRoutes>
            <MyAddedItems />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoutes>
            <MyOrders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/review",
        element: (
          <PrivateRoutes>
            <AddReviewGallery />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFoodReviews",
        element: (
          <PrivateRoutes>
            <MyFoodItemReviews />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
