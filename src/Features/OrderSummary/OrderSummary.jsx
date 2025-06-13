import Navbar from "@/react-components/Navbar";
import React, { useState } from "react";
import { CalendarDays, ClipboardList, Truck, CheckCircle } from "lucide-react";
import Footer from "@/react-components/Footer";
function OrderSummary() {
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const toggleOrderDetails = (id) => {
    setExpandedOrderId((prevId) => (prevId === id ? null : id));
  };
  const orders = [
    {
      id: 125,
      date: "June 3, 2025 at 09:38 AM",
      items: 1,
      amount: "25.00 AED",
      status: "New",
    },
    {
      id: 124,
      date: "June 3, 2025 at 09:37 AM",
      items: 2,
      amount: "38.00 AED",
      status: "New",
    },
    {
      id: 122,
      date: "June 3, 2025 at 09:35 AM",
      items: 3,
      amount: "45.00 AED",
      status: "New",
    },
  ];
  
  
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* order section */}
      <div className="p-6 bg-gray-50 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Order Summary */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Order Summary
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center shadow">
              <ClipboardList className="w-6 h-6 text-blue-500 mb-2" />
              <p className="text-lg font-semibold">2</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
            <div className="bg-white p-4 rounded-lg flex flex-col items-center shadow">
              <Truck className="w-6 h-6 text-green-500 mb-2" />
              <p className="text-lg font-semibold">2</p>
              <p className="text-sm text-gray-500">New</p>
            </div>
            <div className="bg-white p-4 rounded-lg flex flex-col items-center shadow">
              <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
              <p className="text-lg font-semibold">0</p>
              <p className="text-sm text-gray-500">Delivered</p>
            </div>
          </div>
        </div>

        {/* Your Orders */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Your Orders</h3>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center flex-wrap">
                  <div>
                    <p className="font-bold text-sm text-gray-800 " style={{fontSize:"20px"}}>
                      Order ID:{" "}
                      <span className="text-teal-600">#{order.id}</span>
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <CalendarDays className="w-4 h-4" /> Placed on:{" "}
                      {order.date}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <ClipboardList className="w-4 h-4" /> {order.items} item
                      {order.items > 1 && "s"}
                    </p>
                  </div>
                  <div className="flex flex-col items-end mt-2 sm:mt-0">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                      {order.status}
                    </span>
                    <p className="text-teal-600 font-semibold mt-2 text-sm">
                      {order.amount}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className="text-teal-700 text-sm hover:underline flex items-center"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {expandedOrderId === order.id ? (
                      <>
                        Hide Details <span className="ml-1 cursor-pointer">▲</span>
                      </>
                    ) : (
                      <>
                        View Details <span className="ml-1 cursor-pointer">▼</span>
                      </>
                    )}
                  </button>
                  {expandedOrderId === order.id && (
                    <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-100 text-sm">
                     <img className="font-medium mb-2" src="https://tse1.mm.bing.net/th?id=OIP.sfxQ0RsVCxPHD-1Ymaaq9wHaEK&pid=Api&P=0&h=180" alt=""/>
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm mb-2 flex-wrap">
                        <div className="text-gray-700 pr-2">
                          M.Y.San Skyflakes Crackers, 100g
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <p className="text-gray-600">Qty: 5</p>
                          <p className="text-teal-600 font-semibold">
                            {order.amount}
                          </p>
                        </div>
                      </div>

                      <p className="mt-2">
                        <span className="font-semibold">Payment Method:</span>{" "}
                        Cash
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Total Paid:</span>{" "}
                        <span className="text-teal-600 font-semibold">
                          {order.amount}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default OrderSummary;
