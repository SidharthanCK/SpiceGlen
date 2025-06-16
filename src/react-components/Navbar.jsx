import { useRef, useState, useEffect } from "react";
import { LayoutGrid, Search, User, ShoppingCart, Menu } from "lucide-react";
import icon from "./../assets/spiceglen_icon.png";
import { Link, useNavigate } from "react-router-dom"; // Corrected import for Link and useNavigate from 'react-router-dom'
import img from "../assets/ShopByCategories_img.png"; // Assuming this is a generic image for cart items/categories

import { Button } from "@/components/ui/button"; // Shadcn UI Button component
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Shadcn UI Dialog components
import ProfileModal from "@/Features/ProfileModal/ProfileModal"; // Custom ProfileModal component

function Navbar() {
  // useRef to get the height of the navbar dynamically
  const navbarRef = useRef(null);
  // State to store the navbar's height (though currently not used directly for styling)
  const [navbarHeight, setNavbarHeight] = useState(80);
  // State to control the visibility of the mobile navigation drawer
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // State to control the visibility of the main Categories modal
  const [isOpen, setIsOpen] = useState(false);
  // State to control the visibility of the Profile/Login modal
  const [showProfileModal, setShowProfileModal] = useState(false);
  // State to manage the count of items in the shopping cart (example)
  const [cartCount, setCartCount] = useState(1);

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Handlers for incrementing/decrementing cart item count
  const handleCartCountIncrement = () => setCartCount((prev) => prev + 1);
  const handleCartCountDecrement = () => {
    if (cartCount > 1) setCartCount((prev) => prev - 1);
  };

  // Example product reference amount and total calculation
  const refAmount = 20;
  const totalAmount = (cartCount * refAmount).toFixed(2); // Formats to 2 decimal places

  // Array of category data for the Categories modal
  const categories = [
    { title: "Fruits & Vegetables", img: "/fruits.png" },
    { title: "Dairy & Eggs", img: "/dairy.png" },
    { title: "Bakery", img: "/bakery.png" },
    { title: "Snacks & Chips", img: "/snacks.png" },
    { title: "Candies & Chocolates", img: "/candies.png" },
    { title: "Juices & Soft Drinks", img: "/juices.png" },
    { title: "Coffe & Tea", img: "/coffee.png" },
    { title: "Ice Creams", img: "/icecream.png" },
    { title: "Water", img: "/water.png" },
    { title: "Beauty & Hygiene", img: "/beauty.png" },
    { title: "Body Care", img: "/bodycare.png" },
    { title: "Facial Care", img: "/facial.png" },
    { title: "Hair Care & Shampoo", img: "/haircare.png" },
    { title: "Baby Care", img: "/babycare.png" },
  ];

  // Effect to measure navbar height after render
  useEffect(() => {
    const height = navbarRef.current?.offsetHeight;
    setNavbarHeight(height);
  }, [navbarHeight]); // Dependency array re-runs if navbarHeight changes (though it's set once here)

  // Effect to disable body scroll when any modal/drawer is open
  useEffect(() => {
    document.body.style.overflow =
      isMobileOpen || isOpen || showProfileModal ? "hidden" : "auto";

    // Cleanup function to reset overflow when component unmounts or states change
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileOpen, isOpen, showProfileModal]); // Re-run when any of these states change

  // Handler for Profile click: navigate if logged in, show modal if not
  const handleProfileClick = () => {
    const token = localStorage.getItem("token"); // Checks for a token in local storage
    if (token) {
      navigate("/myaccount"); // Navigate to account page if token exists
    } else {
      setShowProfileModal(true); // Show login/signup modal if no token
    }
  };

  return (
    // Main container for the navbar, set to sticky for fixed position on scroll
    <div ref={navbarRef} className="sticky top-0 z-[9999]">
      <nav className="shadow-md gap-1 px-3 sm:px-6 py-3 bg-white flex items-center justify-between relative h-20">
        {/* Logo & Location Section */}
        <div className="flex items-center">
          <div className="w-28 h-full">
            <Link to="/">
              <img
                src={icon}
                alt="Logo"
                className="w-full h-full cursor-pointer" // Responsive image sizing
              />
            </Link>
          </div>

          <button
            style={{ backgroundColor: "#9cc797" }} // Inline style for background color
            className="flex items-center gap-2 ml-2 sm:ml-3 rounded-full text-black px-3 sm:px-4 py-2 text-sm shadow-md"
          >
            <i className="fa-solid fa-location-dot"></i>{" "}
            {/* Font Awesome icon */}
            <h2 className="ml-1 sm:ml-2 text-sm">UAE</h2>
          </button>
        </div>

        {/* Desktop Search Bar (hidden on mobile, visible from md breakpoint) */}
        <div className="hidden md:flex w-[40%] lg:w-[30%]">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 border rounded-full shadow-sm text-sm"
            />
          </div>
        </div>

        {/* Desktop Icons (Categories, Cart, Profile - hidden on mobile, visible from md breakpoint) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {/* Categories Button - opens the Categories modal */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1 hover:text-blue-600 text-sm"
          >
            <LayoutGrid size={18} style={{ color: "#9cc797" }} /> Categories
          </button>

          {/* Cart Dialog Trigger - uses Shadcn UI Dialog for the cart popover */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="hover:text-blue-600">
                <ShoppingCart size={20} style={{ color: "#9cc797" }} />
              </button>
            </DialogTrigger>
            {/* Cart Dialog Content - positioned for desktop */}
            <DialogContent className="fixed right-0 top-[80px] w-[95%] left-auto mt-40 backdrop-blur-sm">
              <DialogHeader>
                <DialogTitle>
                  <h2 className="mb-3 text-center">Shopping Cart</h2>
                  <hr />
                </DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-sm">Product name</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 border-b">
                    <img src={img} alt="product" className="w-12 h-12" />
                    {/* Quantity controls */}
                    <div className="bg-[#e9f7f1] flex items-center gap-4 rounded-full px-3 py-1">
                      <button onClick={handleCartCountDecrement}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="font-semibold text-[#1e8f5c]">
                        {cartCount}
                      </span>
                      <button onClick={handleCartCountIncrement}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    {/* Item total amount */}
                    <div className="ml-4 w-[60px] text-right text-sm font-semibold">
                      {totalAmount} AED
                    </div>
                    {/* Remove item button */}
                    <button className="ml-5 text-gray-400 hover:text-gray-600">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <hr />
                  {/* Total price section */}
                  <div className="flex justify-between text-sm">
                    <h3>Total Price</h3>
                    <p>{totalAmount} AED</p>
                  </div>
                  {/* View Cart button */}
                  <Link to="/cartpage">
                    <Button className="w-full mt-3" variant="outline">
                      View cart
                    </Button>
                  </Link>
                  {/* Checkout button */}
                  <Link to="/checkout">
                    <Button
                      className="w-full mt-3"
                      style={{ backgroundColor: "#9cc797", color: "white" }}
                      variant="outline"
                    >
                      Check Out
                    </Button>
                  </Link>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Profile Button - handles navigation or opening profile modal */}
          <button
            onClick={handleProfileClick}
            className="flex items-center gap-1 hover:text-blue-600 text-sm"
          >
            <User size={18} style={{ color: "#9cc797" }} /> Profile
          </button>
        </div>

        {/* Mobile Menu Toggle (Hamburger icon - visible only on mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Drawer (conditionally rendered when isMobileOpen is true) */}
        {isMobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-4 py-3 md:hidden z-50 gap-3">
            {/* Mobile Search Bar */}
            <div className="relative w-full mb-2">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 text-sm border rounded-full shadow-sm"
              />
            </div>

            {/* Mobile Categories Button - opens Categories modal */}
            <button
              onClick={() => {
                setIsOpen(true); // Open categories modal
                setIsMobileOpen(false); // Close mobile drawer
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              <LayoutGrid size={18} style={{ color: "#9cc797" }} /> Categories
            </button>

            {/* Mobile Cart Dialog Trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                  <ShoppingCart size={18} style={{ color: "#9cc797" }} /> Cart
                </button>
              </DialogTrigger>
              {/* Mobile Cart Dialog Content - centered and full width for mobile */}
              <DialogContent className="z-[9999] fixed flex items-center justify-center p-4 backdrop-blur-sm">
                <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>
                      <h2 className="mb-3 text-center text-lg font-semibold">
                        Shopping Cart
                      </h2>
                      <hr />
                    </DialogTitle>
                    <DialogDescription>
                      <div className="flex flex-col items-center mt-4">
                        <span className="font-semibold text-sm">
                          Product name
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-4 py-3 border-b">
                        <img src={img} alt="product" className="w-12 h-12" />
                        <div className="bg-[#e9f7f1] flex items-center gap-4 rounded-full px-3 py-1">
                          <button onClick={handleCartCountDecrement}>
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <span className="font-semibold text-[#1e8f5c]">
                            {cartCount}
                          </span>
                          <button onClick={handleCartCountIncrement}>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                        <div className="ml-4 w-[60px] text-right text-sm font-semibold">
                          {totalAmount} AED
                        </div>
                        <button className="ml-5 text-gray-400 hover:text-gray-600">
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                      <hr className="mt-3" />
                      <div className="flex justify-between text-sm mt-2">
                        <h3>Total Price</h3>
                        <p>{totalAmount} AED</p>
                      </div>
                      <Link to="/cartpage">
                        <Button className="w-full mt-4" variant="outline">
                          View Cart
                        </Button>
                      </Link>
                      <Link to="/checkout">
                        <Button
                          className="w-full mt-2"
                          style={{
                            backgroundColor: "#9cc797",
                            color: "white",
                          }}
                          variant="outline"
                        >
                          Check Out
                        </Button>
                      </Link>
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Profile Button - opens Profile modal */}
            <button
              onClick={() => {
                setShowProfileModal(true); // Open profile modal
                setIsMobileOpen(false); // Close mobile drawer
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              <User size={18} style={{ color: "#9cc797" }} /> Profile
            </button>
          </div>
        )}
      </nav>

      {/* Categories Modal (full screen overlay, visible when isOpen is true) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-full h-full sm:w-[95%] sm:h-[95%]  max-w-none max-h-none  bg-white sm:rounded-2xl shadow-xl p-6 sm:p-8 overflow-y-auto">
            {/* Close button for Categories modal */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Explore Categories
            </h2>
            {/* Grid of category items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categories.map((cat, index) => (
                <Link to="/subcategory" key={index}>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition duration-200 cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <img
                        src={img} // Using a generic image, ideally should be cat.img
                        alt={cat.title}
                        className="w-12 h-12 object-cover rounded-full border border-gray-300 p-1"
                      />
                      <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600">
                        {cat.title}
                      </span>
                    </div>
                    <span className="text-gray-400 text-2xl group-hover:text-blue-500 transform group-hover:translate-x-1">
                      &rsaquo; {/* Right arrow character */}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal (for login/signup) */}
      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </div>
  );
}

export default Navbar;
