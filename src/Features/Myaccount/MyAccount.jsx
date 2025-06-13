import Navbar from "@/react-components/Navbar";
import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import DeleteAccountModal from "../Deleteaccount/DeleteAccountModal";
import { Link } from "react-router";
import { Pencil, Trash2, Plus, MapPin, Map, Phone } from "lucide-react";
import Footer from "@/react-components/Footer";
import AddressAddEditModal from "../AddressAddEditModal/AddressAddEditModal";
import EditAddress from "../AddressAddEditModal/EditAddress";

const addresses = [
  {
    name: "Sidharthan C K",
    street: "767, kalpetta, near bustop",
    city: "kerala - 673121",
    phone: "9745050968",
  },
  {
    name: "remya",
    street: "88, hhj, near bustop",
    city: "kerala - 6555999",
    phone: "+918289846107",
  },
  {
    name: "varun",
    street: "22a, pulliyode, near po",
    city: "calicut - 2314444",
    phone: "918353355633",
  },
];
function MyAccount() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const[showEditAddressModal,setShowEditAddressModal]=useState(false)
  const handleDeleteAccount = () => {
    console.log("Account deleted");
    setShowDeleteModal(true);
  };
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <div
        className="text-sm mb-6 flex items-center space-x-1 md:space-x-2 text-gray-600 ml-4 md:ml-20 "
        style={{ border: "1px 1px solid gray" }}
      >
        <span
          className="text-blue-600 cursor-pointer font-bold text-base md:text-xl mt-4 md:mt-5"
          
        >
          Home
        </span>
        <span className="mt-4 md:mt-5">{">"}</span>
        <span
          className="text-blue-600 cursor-pointer font-bold text-base md:text-xl md:mt-5"
          
        >
          Profile
        </span>
        <span style={{ marginTop: "20px" }}>{">"}</span>
        <span
          className=" text-black font-bold text-base md:text-xl mt-4 md:mt-5"
          
        >
          My Account
        </span>
      </div>
      {/* My Account banner */}
      <div className="h-16 md:h-20  bg-sky-400 flex items-center  ">
        <div className=" ">
          <h1 className="  text-center  ml-4 md:ml-20 text-2xl md:text-3xl text-white font-medium">
            My Account
          </h1>
        </div>
      </div>
      {/* Account details */}
      <div>
        <div className=" bg-gray-100 p-4 md:p-6  flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-full  md:max-w-xs bg-white rounded-lg shadow p-4 md:h-80">
            <h2 className="text-xl font-semibold text-green-900 bg-green-100 p-2 rounded mb-4">
              Account Settings
            </h2>
            <ul className="space-y-3 text-gray-700">
             <div>
              <Link to="/ordersummary">
               <li className="hover:text-black cursor-pointer">Track Orders</li>
               </Link>
             </div>
              <div>
                <Link to="/termsandcondition">
                  <li className="hover:text-black cursor-pointer">
                    Terms & Conditions
                  </li>
                </Link>
              </div>
              <div>
                <Link to="/privacypolicy">
                  <li className="hover:text-black cursor-pointer">
                    Privacy Policy
                  </li>
                </Link>
              </div>
              <div>
                <Link to="/contactus">
                  <li className="hover:text-black cursor-pointer">
                    Contact Us
                  </li>
                </Link>
              </div>
              <li
                className="hover:text-black cursor-pointer"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete Account
              </li>
            </ul>
          </div>
          {/* Delete Modal */}
          <DeleteAccountModal
            open={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onDelete={handleDeleteAccount}
          />

          {/* Profile Details */}
          {/* Right Section - Profile & Addresses */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Profile Details */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Profile Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h2 className="text-gray-500">Name</h2>
                  <h2 className="font-semibold text-black">Sidharthan CK</h2>
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-semibold text-black">
                    sidharthanck4760@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Mobile Number</p>
                  <p className="font-semibold text-black">+918289846107</p>
                </div>
              </div>

              {/* Prime Select Credit Card */}
              <div className="bg-gradient-to-r from-teal-500 to-green-700 text-white rounded-xl p-5 mt-6 relative">
                <div className="flex flex-col sm:flex-row  justify-between sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Prime Select Credit
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <input type="checkbox" checked readOnly />
                      <span>Available Balance</span>
                    </div>
                  </div>
                  <div className="flex flex-col item-start sm:items-end mt-4 sm:mt-0">
                    <button className="bg-teal-300 text-teal-900 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <RefreshCw size={14} /> Transactions
                    </button>
                    <span className="text-xl font-bold mt-2">56.05 AED</span>
                  </div>
                </div>
              </div>

              {/* Prime Select Points */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-teal-600 text-xl">
                  ★
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Spice Glen Points
                  </h4>
                  <p className="text-sm text-gray-500">0 points available</p>
                </div>
              </div>
            </div>

            {/* My Addresses */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col sm:flex-row  items-center justify-between mb-6 gap-4 sm:gap-0">
                <h2 className="text-xl font-semibold text-orange-600">
                  My Addresses
                </h2>
                <button
                  className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 w-full sm:w-auto justify-center"
                  onClick={() => setShowAddressModal(true)}
                >
                  <Plus size={16} />
                  Add New Address
                </button>
              </div>
              <AddressAddEditModal
                open={showAddressModal}
                onClose={() => setShowAddressModal(false)}
              />

              {addresses.map((addr, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-md mb-4 flex flex-col sm:flex-row justify-between items-start bg-gray-50"
                >
                  <div>
                    <p className="font-semibold mb-2">{addr.name}</p>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      <span>{addr.street}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm mt-1">
                      <Map className="w-4 h-4 text-teal-600" />
                      <span>{addr.city}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm mt-1">
                      <Phone className="w-4 h-4 text-teal-600" />
                      <span>Mobile: {addr.phone}</span>
                    </div>
                    <button className="mt-4 px-4 py-1 border border-teal-600 text-teal-600 rounded hover:bg-teal-50 text-sm rext-sm w-full sm:w-auto">
                      Set as Default
                    </button>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-2 mt-4 sm:mt-0">
                    <button className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                    onClick={()=>setShowEditAddressModal(true)}
                    
                    >
                      <Pencil className="text-teal-600 w-4 h-4" />
                    </button>
                    <EditAddress
                    open={showEditAddressModal}
                    onClose={()=>setShowEditAddressModal(false)}
                    
                    />

                    <button className="p-2 bg-red-50 rounded hover:bg-red-100">
                      <Trash2 className="text-red-600 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      //{" "}
    </div>
  );
}

export default MyAccount;
