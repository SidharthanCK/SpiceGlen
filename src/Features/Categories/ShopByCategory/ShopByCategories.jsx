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
      <div className="w-[90%] max-w-[100%] mx-auto mt-2 mb-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold" style={{fontSize:"30px"}}>Shop By Categories</h2>
           <button  onClick={() => setIsModalOpen(true)} className="bg-green-200 hover:bg-green-300 text-black font-medium py-3 px-6 rounded-full shadow-sm transition duration-300">
        View All
      </button>
        </div>
        {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50" style={{marginTop:"100px"}}>
          <div className="bg-white w-[90%] max-w-6xl h-[90vh] rounded-lg shadow-lg p-6 overflow-y-auto relative z-9999">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6">All Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition text-center"
                >
                  <img
                    src={CategoryImg}
                    alt={cat.title}
                    className="w-20 h-20 object-contain mx-auto mb-4"
                  />
                  <p className="font-medium">{cat.title}</p>
                </div>
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
