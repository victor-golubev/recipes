import { createBrowserRouter } from "react-router-dom";
import UsersRecipesPage from "../pages/UsersRecipesPage";
import PublicRecipesPage from "../pages/PublicRecipesPage";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsList from "../components/ProductsList/ProductsList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "users-recipes", element: <UsersRecipesPage /> },
      { path: "public-recipes", element: <PublicRecipesPage /> },
      { path: "products", element: <ProductsList /> },
    ],
  },
]);
