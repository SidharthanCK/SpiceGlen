import React from 'react'
import { Link } from 'react-router'

function ContactUs() {
  return (
   <div className="text-center py-10 px-4 my-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Make every Spices special with Spice Glen.!
      </h1>

      <p className="text-base md:text-lg  mb-8 max-w-2xl mx-auto">
        Elevate your culinary creations with our premium-quality spice, handpicked and carefully processed to retain its natural aroma, flavor, and nutritional value. Perfect for adding depth and richness to a variety of dishes, this spice is a must-have in every kitchen
      </p>

     <Link to="/contactus">
      <button className=" hover:bg-green-300 text-black font-medium py-3 px-6 rounded-full shadow-sm transition duration-300" style={{backgroundColor:"#9cc797"}}>
        Contact
      </button></Link>
    </div>
  )
}

export default ContactUs
