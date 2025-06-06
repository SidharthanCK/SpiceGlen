import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./Features/ProductList/ProductList";
import SubCategory from "./Features/Subcategory/SubCategory";
import SingleProductList from "./Features/SingleProductList/SingleProductList";
import CartPage from "./Features/CartPage/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/subcategory" element={<SubCategory/>}/>
        <Route path="/singleproductlist" element={<SingleProductList/>}/>
        <Route path="/cartpage" element={<CartPage/>}/>
      </Routes>
    </>
  );
}

export default App;
