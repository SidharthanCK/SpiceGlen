import Navbar from '@/react-components/Navbar'
import React, { useEffect, useState } from 'react'
import { ChevronLeft } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Footer from '@/react-components/Footer';
import { Link } from 'react-router';

const categories = [
  { name: "All", image: "/images/all.png", active: true },
  { name: "Vegetables", image: "/images/vegetables.png" },
  { name: "Fruits", image: "/images/fruits.png" },
  { name: "Fresh Herbs", image: "/images/herbs.png" },
];

const products = [
  {
    name: "Dettol Antibacterial Antiseptic Disinfectant...",
    price: "28.5 ",
    image: "/images/dettol.png",
  },
  {
    name: "Johnson's Baby Gold Shampoo 300 ml",
    price: "22 ",
    image: "/images/johnson.png",
  },
  {
    name: "Kotex Ultra Thin Feminine Pads, 10 pads",
    price: "14.5 ",
    image: "/images/kotex.png",
  },
  {
    name: "Henna Speedy Hair Dye Shampoo Black Hs08",
    price: "8.5 ",
    image: "/images/henna.png",
  },
  {
    name: "Twix Chocolate Ice Cream Bar, 50ml",
    price: "7.5 ",
    image: "/images/twix.png",
  },
  {
    name: "Volvic Natural Mineral Water, 330ml",
    price: "7 ",
    image: "/images/volvic.png",
  },
  {
    name: "Toblerone Milk Chocolate, 35g",
    price: "5.5 ",
    image: "/images/toblerone.png",
  },
  {
    name: "Maltesers Chocolate, 37g",
    price: "5 ",
    image: "/images/maltesers.png",
  },
  {
    name: "Loacker Cremkakao Chocolate Wafer, 45g",
    price: "4.5 ",
    image: "/images/loacker.png",
  },
  {
    name: "Kinder Chocolate Bar with Cereals, 23.5g",
    price: "2.25 ",
    image: "/images/kinder.png",
  },
];



function SubCategory() {
  const[sortOption,setSortOption]=useState("");
const[filteredProducts,setFilteredProducts]=useState(products);

useEffect(()=>{
  let sorted= [...products]
  if(sortOption==="high"){
    sorted.sort((a,b)=>parseFloat(b.price)-parseFloat(a.price));
  }else if(sortOption==="low"){
    sorted.sort((a,b)=>parseFloat(a.price)-parseFloat(b.price));
  }else if(sortOption==='new'){
    sorted=[...products]
  }
  setFilteredProducts(sorted)
},[sortOption])
  return (
    <div>
        {/* navbar */}
      <Navbar />
      {/* Sub cat product name banner*/}
       <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <ChevronLeft className="w-5 h-5 cursor-pointer" />
        <h2 className="text-xl font-semibold">Fruits &amp; vegetables</h2>
      </div>

      {/* Categories */}
      <div className="bg-teal-100 p-4 rounded-md">
        <div className="flex space-x-6 overflow-x-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1">
              <div
                className={`w-20 h-20 rounded-full border-2 p-1 ${
                  cat.active ? "border-teal-700" : "border-transparent"
                }`}
              >
                <img 
                  src="https://tse4.mm.bing.net/th?id=OIP.DIWO9z7rNdoiffsdr_4_NgHaE8&pid=Api&P=0&h=180"
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full cursor-pointer"
                />
              </div>
              <span
                className={`text-sm font-medium ${
                  cat.active ? "text-teal-700 border-b-2 border-teal-700" : ""
                }`}
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* sub cat product list  */}
      <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 text-teal-700 font-medium">
          <ShoppingCart size={20} />
          <span>2269 Items</span>
        </div>

        <select className="border border-gray-300 rounded px-3 py-1 text-sm"
        value={sortOption}
        onChange={(e)=>setSortOption(e.target.value)}
        >
          <option value="high">Price: High to Low</option>
          <option value="low">Price: Low to High</option>
          <option value="new">Newest First</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.map((item, idx) => (
          <Link to="/singleproductlist">
          <div
            key={idx}
            className="border rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
          >
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.DIWO9z7rNdoiffsdr_4_NgHaE8&pid=Api&P=0&h=180"
              alt={item.name}
              className="h-24 object-contain mb-3"
            />
            <h3 className="text-sm font-medium line-clamp-2 mb-1">
              {item.name}
            </h3>
            <span className="font-semibold text-sm">{item.price} </span>
          </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        <button className="px-3 py-1 rounded border text-sm text-gray-600 hover:bg-gray-100">
          ←
        </button>
        <button className="px-3 py-1 rounded border bg-teal-600 text-white text-sm">
          1
        </button>
        <button className="px-3 py-1 rounded border text-sm text-gray-600 hover:bg-gray-100">
          2
        </button>
        <span className="text-sm">...</span>
        <button className="px-3 py-1 rounded border text-sm text-gray-600 hover:bg-gray-100">
          227 →
        </button>
      </div>
    </div>

    {/* footer */}
    <Footer/>
    </div>
  )
}

export default SubCategory
