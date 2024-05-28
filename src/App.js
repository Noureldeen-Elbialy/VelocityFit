import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import ProductContextProvider from "./context/ProductContext";

let routers = createHashRouter([
  {
    path: '/', element: <Layout />, children: [
    {index:true ,element:<Home/>},
    {path:'/product/:id' ,element:<ProductDetails/>},
    {path:'/cart' ,element:<Cart/>},
  ]}
])

function App() {
  return (
    <>
      <ProductContextProvider>
          <RouterProvider router={routers}></RouterProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
