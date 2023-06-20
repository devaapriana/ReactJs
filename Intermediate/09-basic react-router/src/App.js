import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/', element: <Home />},
      {path: '/product', element: <Product />}
    ]
  }
  
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
