import Navbar from '@/react-components/Navbar'
import React from 'react'
import { MapPin, Mail, Phone } from "lucide-react";
function ContactUs() {
  return (
    <div>
      {/* navbar */}
      <Navbar/>

      {/* pages */}
      <div
        className="text-sm mb-6 flex items-center space-x-2 text-gray-600 px-4 md:px-8 lg:px-20  "
        style={{ border: "1px 1px solid gray" }}
      >
        <span
          className="text-blue-600 cursor-pointer font-bold "
          style={{ fontSize: "20px", marginTop: "20px" }}
        >
          Home
        </span>
        <span style={{ marginTop: "20px" }}>{">"}</span>
        <span
          className="text-blue-600 cursor-pointer font-bold"
          style={{ fontSize: "20px", marginTop: "20px" }}
        >
          Profile
        </span>
        <span style={{ marginTop: "20px" }}>{">"}</span>
        <span
          className=" text-black font-bold"
          style={{ fontSize: "20px", marginTop: "20px" }}
        >
         Contact Us
        </span>
      </div>
        {/* contact Us banner */}
    <div className="h-20  bg-sky-200 flex items-center  ">
        <div className=" ">
          <h1 className="  text-center  ml-20 text-3xl text-white font-medium">
            Contact Us
          </h1>
        </div>
      </div>
      {/* contact details */}
       <div className="bg-white p-6 rounded-lg shadow-sm max-w-md px-4, md:px-8, lg:px-20">
      <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

      {/* Address */}
      <div className="flex items-start space-x-3 mb-4">
        <div className="bg-teal-50 p-2 rounded">
          <MapPin className="text-teal-500 w-5 h-5" />
        </div>
        <div>
          <p className="text-lg font-medium">Address</p>
          <p className="text-lg text-gray-700">
            Al gazelle building, Khalifa park, Abu dhabi
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-3 mb-4">
        <div className="bg-teal-50 p-2 rounded">
          <Mail className="text-teal-500 w-5 h-5" />
        </div>
        <div>
          <p className="text-lg font-medium break-words">Email</p>
          <a
            href="mailto:primeselect.uae@gmail.com"
            className="text-lg text-teal-600 hover:underline"
          >
            spiceglen@gmail.com
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-3">
        <div className="bg-teal-50 p-2 rounded">
          <Phone className="text-teal-500 w-5 h-5" />
        </div>
        <div>
          <p className="text-lg font-medium">Phone</p>
          <a
            href="tel:+971585860577"
            className="text-lg text-teal-600 hover:underline"
          >
            +971585860577
          </a>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default ContactUs
