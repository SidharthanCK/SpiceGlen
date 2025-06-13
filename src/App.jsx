import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./Features/ProductList/ProductList";
import SubCategory from "./Features/Subcategory/SubCategory";
import SingleProductList from "./Features/SingleProductList/SingleProductList";
import CartPage from "./Features/CartPage/CartPage";
import CheckoutPage from "./Features/Checkout/CheckoutPage";
import MyAccount from "./Features/Myaccount/MyAccount";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import ContactUs from "./pages/ContactUs";
import AddressAddEditModal from "./Features/AddressAddEditModal/AddressAddEditModal";
import OrderSummary from "./Features/OrderSummary/OrderSummary";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/singleproductlist" element={<SingleProductList />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/addressaddeditmodal" element={<AddressAddEditModal />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
