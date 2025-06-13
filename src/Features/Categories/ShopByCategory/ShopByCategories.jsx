import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CategoryImg from "../../../assets/ShopByCategories_img.png";
import CategoryImg2 from "../../../assets/ShopByCategories_img2.png";
import CategoryImg3 from "../../../assets/ShopByCategories_img3.png";
import { Link } from "react-router";

function ShopByCategories() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const categories = [
    { title: "Fruits & vegetables", img: "/fruits.png" },
    { title: "Dairy & Eggs", img: "/dairy.png" },
    { title: "Bakery", img: "/bakery.png" },
    { title: "Snacks & Chips", img: "/snacks.png" },
    { title: "Candies & Chocolates", img: "/candies.png" },
    { title: "Juices & Soft drinks", img: "/juices.png" },
    { title: "Coffe & Tea", img: "/coffee.png" },
    { title: "Ice Creams", img: "/icecream.png" },
    { title: "Water", img: "/water.png" },
    { title: "Beauty & Hygiene", img: "/beauty.png" },
    { title: "Body Care", img: "/bodycare.png" },
    { title: "Facial Care", img: "/facial.png" },
    { title: "Facial Care", img: "/facial.png" },
    { title: "Facial Care", img: "/facial.png" },
  ];
  return (
    <div>
      <div className="w-[80%] max-w-[100%] mx-auto mt-10 mb-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold" style={{fontSize:"30px"}}>Shop By Categories</h2>
           <button  onClick={() => setIsModalOpen(true)} className="bg-green-200 hover:bg-green-300 text-black font-medium py-3 px-6 rounded-full shadow-sm transition duration-300" style={{backgroundColor:"#9cc797"}}>
        View All
      </button>
        </div>
        {/* Modal */}
     {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300">
    {/* Modal container */}
    <div className="bg-white w-[95%] max-w-6xl h-[90vh] mt-24 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto relative animate-fade-in">
      
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-red-500 transition"
        onClick={() => setIsModalOpen(false)}
        aria-label="Close"
      >
        &times;
      </button>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
        All Categories
      </h2>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <Link to="/subcategory" key={index}>
            <div className="bg-gray-100 hover:bg-white border hover:border-gray-300 transition-all duration-200 p-6 rounded-xl shadow-sm hover:shadow-md text-center group">
              <img
                src={CategoryImg}
                alt={cat.title}
                className="w-20 h-20 object-contain mx-auto mb-4 transition-transform duration-200 group-hover:scale-105"
              />
              <p className="font-semibold text-gray-700 group-hover:text-blue-600">
                {cat.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}

        <div
          className="  mx-auto mt-8 mb-3"
          style={{ backgroundColor: "white", width: "100%",borderRadius:"5px" }}
        >
         <Link to="/subcategory" >
          <Swiper 
         
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={2.5}
            breakpoints={{
              640: { slidesPerView: 3.5 },
              768: { slidesPerView: 4.5 },
              1024: { slidesPerView: 5.5 },
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mb-3 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg2}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg3}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg3}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={CategoryImg}
                    alt="Category"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <p className="text-sm font-medium text-center">Category 2</p>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlide blocks as needed */}
          </Swiper>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategories;
