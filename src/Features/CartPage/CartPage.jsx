import Footer from "@/react-components/Footer";
import Navbar from "@/react-components/Navbar";
import React, { useState } from "react";
import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import image from "../../assets/ShopByCategories_img.png";

function CartPage() {
  const [cartcount, setCartCount] = useState(1);

  const HandleCartCountIncrement = () => {
    setCartCount((prev) => prev + 1);
  };
  const HandleCartCountDecrement = () => {
    if (cartcount > 1) {
      setCartCount((prev) => prev - 1);
    }
  };
  // cart price
  const pricePerItem = 7.5;
  const subtotal = (cartcount * pricePerItem).toFixed(2);

  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* cart design */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          margin: "10px",
          padding: "5px 10px",
          border: "1px  gray",
          textAlign: "center",
          gap: "8px",
        }}
      >
        <Link to="/">
          <p className="mx-10" style={{ cursor: "pointer" }}>Home</p>
        </Link>
        <i className="fa-solid fa-greater-than p-1"></i>
        <p className="mx-5" style={{ color: "#9cc797" }}>My Cart</p>
      </div>

      <div
        style={{
          // margin: "10px",
          padding: "10px 15px",
          border: "1px  gray",
          backgroundColor: "#9cc797",
          width: "100%",
          gap: "8px",
        }}
      >
        <div style={{ marginLeft: "25%" }}>
          <h1>My Cart</h1>
          <p>
            <span>1</span> item added{" "}
          </p>
        </div>
      </div>

      {/* cart details */}

      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 p-4 md:p-6 lg:p-10 bg-gray-100 ">
        {/* Cart Items */}
        <Card className="w-full md:w-2/3,">
          <CardContent className="p-6">
            {/* Table Header */}
           <div className="hidden md:flex justify-between text-sm font-semibold text-gray-600 border-b pb-2">
              <span className="w-2/5">PRODUCT</span>
              <span className="w-1/5 text-center">PRICE</span>
              <span className="w-1/5 text-center">QUANTITY</span>
              <span className="w-1/5 text-right">SUBTOTAL</span>
            </div>

            {/* Item Row */}
            <div className="flex flex-col md:flex-row  items-center justify-between py-4 border-b md:border-b-0 last:border-b-0">
              {/* Product */}
              <div className="flex items-center gap-4 w-full md:w-2/5 mb-4 md:mb-0">
                <img
                  src={image}
                  alt="product"
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <p className="font-medium text-base">
                  Galaxy Vanilla & Chocolate Ice Cream Bar, 54.6g
                </p>
              </div>

               {/* Price (Mobile) */}
              <div className="flex justify-between items-center w-full md:hidden text-gray-800 mb-2">
                <span className="font-semibold text-sm">Price:</span>
                <span className="font-medium">7.50 AED</span>
              </div>

              {/* Price (Desktop) */}
              <div className="hidden md:block w-1/5 text-center text-gray-800 font-medium">
                7.50 AED
              </div>

              {/* Quantity mobile*/}
             <div className="flex justify-between items-center w-full md:hidden mb-2">
                <span className="font-semibold text-sm">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={HandleCartCountDecrement}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="font-medium">{cartcount}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={HandleCartCountIncrement}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              {/* Quantity (Desktop) */}
              <div className="hidden md:flex w-1/5 items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={HandleCartCountDecrement}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="font-medium">{cartcount}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={HandleCartCountIncrement}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Subtotal + Delete */}
              <div className="w-1/5 flex justify-end items-center gap-3">
                <span className="text-emerald-600 font-semibold">
                  {" "}
                  {subtotal} AED
                </span>
                <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500 cursor-pointer" />
              </div>
            </div>
              {/* Subtotal + Delete (Mobile) */}
              <div className="flex justify-between items-center w-full md:hidden mt-2">
                <span className="font-semibold text-sm">Subtotal:</span>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600 font-semibold">
                    {subtotal} AED
                  </span>
                  <Trash2 className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer" />
                </div>
              </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="w-full lg:w-1/3 shadow-md rounded-lg sticky top-6">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between text-sm border-b pb-2 text-gray-600">
              <span>
                Subtotal ({cartcount} item{cartcount > 1 ? "s" : ""})
              </span>
              <span className="font-medium text-gray-800"> {subtotal} AED</span>
            </div>

            <div className="flex justify-between mt-4 text-base font-semibold">
              <span>Total</span>
              <span className="text-emerald-600"> {subtotal} AED</span>
            </div>

            <Link to="/checkout">
              <Button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700">
                Proceed to Checkout
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default CartPage;
