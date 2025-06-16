import Navbar from "@/react-components/Navbar";
import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import image from "../../assets/ShopByCategories_img.png";
import { Button } from "@/components/ui/button"
function SingleProductList() {
  const[count,setCount]=useState(1)

 const handleCountIncrement=()=>{
  setCount(prev=> prev+1);
 };

 const handleCountDecrement=()=>{
  if(count>1){
    setCount(prev=> prev-1);
  }
 };

//  amount
const refAmount=8.55;
const totalAmount=(refAmount*count).toFixed(3)
  return (
    <>
      {/* navbar */}
      <Navbar />


      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-sm mb-6 flex items-center space-x-2 text-gray-600">
          <span className="text-blue-600 cursor-pointer">Home</span>
          <span>{">"}</span>
          <span className="text-blue-600 cursor-pointer">Products</span>
          <span>{">"}</span>
          <span className="font-medium text-black">
            Shahab Al Khaleej Chai Seed, 100g
          </span>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-xl shadow">
            <img
              src={image}
              alt="Chai Seed"
              className="rounded-xl w-full object-contain max-h-[400px]"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Shahab Al Khaleej Chai Seed, 100g
            </h1>
            <p className="text-xl font-semibold text-green-600">{totalAmount} AED</p>
            <p className="text-sm text-gray-500 mb-4">Inclusive of all taxes</p>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Quantity</label>
              <div className="flex items-center border rounded-md w-max">
                <button className="px-3 py-2 hover:bg-gray-100"disabled={count === 1} onClick={ handleCountDecrement}>
                  <Minus size={16} />
                </button>
                <span className="px-4">{count}</span>
                <button className="px-3 py-2 hover:bg-gray-100"  onClick={handleCountIncrement} >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="w-full  hover:bg-teal-700 text-white py-3 rounded-md flex items-center justify-center gap-2 cursor-pointer"
              style={{ backgroundColor: "#9cc797" }}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related product section */}
      <div>
        <div>
          <h1
            className=""
            style={{
              textAlign: "center",
              fontSize: "30px",
              color: "#9cc797",
              text: "bolder",
            }}
          >
            Related Products
          </h1>
          <hr />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-5 mx-auto p-10">
            <div className="w-60 lg:w-75 mx-auto" >
              {/* rltd product card */}
              <Card>
                <CardHeader>
                  <CardTitle><img src={image} alt=""/></CardTitle>
                  <CardDescription>
                    <h2>
                      Shahab Al Khaleej Chai Seed, 100g
                    </h2>
                    </CardDescription>
                 
                </CardHeader>
                <CardContent>
                  <p><span>8</span > AED</p>
                </CardContent>
                <CardFooter>
                 <Button style={{width:"100%",backgroundColor:"#9cc797",cursor:"pointer"}} variant="outline">Add To cart</Button>
                </CardFooter>
              </Card>
            </div>
              <div className="w-60 lg:w-75 mx-auto" >
              {/* rltd product card */}
              <Card>
                <CardHeader>
                  <CardTitle><img src={image} alt=""/></CardTitle>
                  <CardDescription>
                    <h2>
                      Shahab Al Khaleej Chai Seed, 100g
                    </h2>
                    </CardDescription>
                 
                </CardHeader>
                <CardContent>
                  <p><span>8</span > AED</p>
                </CardContent>
                <CardFooter>
                 <Button style={{width:"100%",backgroundColor:"#9cc797",cursor:"pointer"}} variant="outline">Add To cart</Button>
                </CardFooter>
              </Card>
            </div>
             <div className="w-60 lg:w-75 mx-auto" >
              {/* rltd product card */}
              <Card>
                <CardHeader>
                  <CardTitle><img src={image} alt=""/></CardTitle>
                  <CardDescription>
                    <h2>
                      Shahab Al Khaleej Chai Seed, 100g
                    </h2>
                    </CardDescription>
                 
                </CardHeader>
                <CardContent>
                  <p><span>8</span > AED</p>
                </CardContent>
                <CardFooter>
                 <Button style={{width:"100%",backgroundColor:"#9cc797",cursor:"pointer"}} variant="outline">Add To cart</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductList;
