import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./compoenents/Navbar";
import ItemDetails from "./pages/itemsDeatils";
import ErrorPage from "./pages/Errorpge";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },
        { path: "About", element: <About /> },
        {
          path: "Items",
          children: [
            { index: true, element: <Items /> },
            { path: ":id", element: <ItemDetails /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
