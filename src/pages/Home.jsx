import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import carousel_1 from "./../assets/carosal-1.jpg";
import carousel_2 from "../../src/assets/carousal-2.jpg";
import casousel_3 from "../../src/assets/carousal-3.png";

import Navbar from "@/react-components/Navbar";
import ShopByCategories from "@/Features/Categories/ShopByCategory/ShopByCategories";
import ProductList from "@/Features/ProductList/ProductList";
import ContactUs from "@/react-components/ContactUs";
import CustomerReview from "@/Features/CustomerReview/CustomerReview";
import Footer from "@/react-components/Footer";

function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* Swiper Carousel */}
      <div className="flex justify-center items-center mt-6">
        <div className="w-[90%] max-w-[1700px] h-[50vh]">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            loop={true}
            pagination={{ clickable: true }}
            className="rounded-xl h-[300px]"
          >
            <SwiperSlide className=" rounded-xl">
              <img
                src={carousel_1}
                alt="slide 1"
                className="w-full h-full object-fit rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <img
                src={carousel_2}
                alt="slide 2"
                className="w-full h-full object-fit rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <img
                src={casousel_3}
                alt="slide 3"
                className="w-full h-full object-fit rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* shop by categories */}
      <ShopByCategories />
      {/* Product list */}
      <ProductList />
      {/* contact us */}
      <ContactUs />
      {/* Customer Review */}
      <CustomerReview />
      {/* footer section  */}
      <Footer />
    </>
  );
}

export default Home;
