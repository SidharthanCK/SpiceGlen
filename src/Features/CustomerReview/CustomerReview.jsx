import React from 'react'
import Review1 from "../../assets/Review1.jpg"
function CustomerReview() {
  return (
    <div>
      <div className="text-center py-10 px-4">
      <h2 className="text-3xl font-semibold mb-10">Customer Says..!</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-64 border rounded-3xl shadow-sm px-4 pt-12 pb-6 relative bg-white"
          >
            {/* Avatar Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={Review1} // Replace with your image path
                alt="avatar"
                className="w-20 h-20 object-cover rounded-full border-4 border-white"
              />
            </div>

            {/* Product Title */}
            <h3 className="text-sm font-medium mb-2 mt-2">
              Spice Glen Traditional spices [Premium]
            </h3>

            {/* Star Ratings */}
            <div className="text-yellow-500 mb-2">
              ★★★★☆
            </div>

            {/* Review Heading */}
            <p className="text-green-800 font-semibold italic text-lg mb-2">
              Excellent product !
            </p>

            {/* Review Content */}
            <p className="text-sm text-gray-700 mb-4 leading-tight">
              Very good product. Must try this product.
              <br />i also used it.
            </p>

            {/* Reviewer Name */}
            <p className="text-lg font-bold tracking-wide">SWETHA</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default CustomerReview
