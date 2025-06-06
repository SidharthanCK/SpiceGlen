import React from "react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import { Link } from "react-router";
function ProductList() {
  return (
    <div>
      <div className="w-[90%] max-w-[1200px] mx-auto mt-10 mb-4">
        <h1 className="text-3xl font-bold text-center mb-8"> Products List</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="border rounded-lg shadow-md p-4 pt-6 flex flex-col items-center relative">
            <Link to="/singleproductlist">
              <img
                src={product1}
                alt="Product"
                className="w-full h-40 object-cover mb-4 rounded cursor-pointer"
              />
            </Link>
            <h3 className="text-lg font-semibold mb-2">Product 1</h3>
            <p className="text-green-600 font-medium">₹199</p>
            <button
              style={{
                backgroundColor: "#9cc797",
                width: "90%",
                fontSize: "20px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
             <Link to="/cartpage">
              Add To cart</Link>
            </button>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg shadow-md p-4 pt-6 flex flex-col items-center relative">
            <img
              src={product2}
              alt="Product"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">Product 2</h3>
            <p className="text-green-600 font-medium">₹199</p>
            <button
              style={{
                backgroundColor: "#9cc797",
                width: "90%",
                fontSize: "20px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              Add To cart
            </button>
          </div>

          {/* Card 3 */}
          <div className="border rounded-lg shadow-md p-4 pt-6 flex flex-col items-center relative">
            <img
              src={product3}
              alt="Product"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">Product 3</h3>
            <p className="text-green-600 font-medium">₹199</p>
            <button
              style={{
                backgroundColor: "#9cc797",
                width: "90%",
                fontSize: "20px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              Add To cart
            </button>
          </div>

          {/* Card 4 */}
          <div className="border rounded-lg shadow-md p-4 pt-6 flex flex-col items-center relative">
            <img
              src={product1}
              alt="Product"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">Product 4</h3>
            <p className="text-green-600 font-medium">₹199</p>
            <button
              style={{
                backgroundColor: "#9cc797",
                width: "90%",
                fontSize: "20px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              Add To cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
