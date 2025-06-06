import { useRef, useState, useEffect } from "react";
import { LayoutGrid, Search, User, ShoppingCart, Menu } from "lucide-react";
import icon from "./../assets/spiceglen_icon.png";
import { Link } from "react-router";
import img from "../assets/ShopByCategories_img.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Navbar() {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(80); // default height
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    { title: "Baby Care", img: "/babycare.png" },
    { title: "Baby Care", img: "/babycare.png" },
  ];

  useEffect(() => {
    const height = navbarRef.current?.offsetHeight;
    setNavbarHeight(height);
  }, [navbarHeight, navbarRef.current?.offsetHeight]);

  return (
    <div ref={navbarRef} className="sticky top-0 z-9999">
      <nav className="w-full shadow-md px-4 py-3 bg-white flex items-center justify-between relative h-10">
        {/* Left Icon */}
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={icon}
              alt="Logo"
              className=" sm:h-12 sm:w-12 md:h-14 md:w-14"
              style={{ width: "120px", height: "130px" }}
            />
          </div>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex absolute left-[40%] w-[30%]">
          <div className="relative w-full">
            {/* Search Icon */}
            <Search
              style={{ color: "#9cc797" }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer  "
              size={18}
            />
            {/* Input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-1 border rounded-full shadow-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* categories */}
          <div>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-blue-600"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
            >
              <LayoutGrid size={18} style={{ color: "#9cc797" }} />
              Categories
            </a>

            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-60 backdrop-blur-md transition-opacity duration-300">
                <div className="w-[95%] max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-2xl p-8 overflow-y-auto transform transition-all duration-300 scale-100">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800">
                      Explore Categories
                    </h2>
                    <button
                      className="text-3xl text-gray-500 hover:text-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories.map((cat, index) => (
                      <Link to="/subcategory" key={index}>
                        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer border border-gray-100 hover:border-gray-200">
                          <div className="flex items-center gap-4">
                            <img
                              src={img}
                              alt={cat.title}
                              className="w-12 h-12 object-cover rounded-full border border-gray-200 p-1"
                            />
                            <span className="text-lg font-medium text-gray-700">
                              {cat.title}
                            </span>
                          </div>
                          <span className="text-gray-400 text-xl transition-transform duration-200 group-hover:translate-x-1">
                            ›
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Cart */}

          <Dialog className="relative">
            <DialogTrigger>
              <button>
                <a href="#" className="hover:text-blue-600">
                  <ShoppingCart size={20} style={{ color: "#9cc797" }} />
                </a>
              </button>
            </DialogTrigger>
            <DialogContent
              className={
                navbarHeight
                  ? `absolute top-[${navbarHeight}px] right-0 w-[400px] translate-0 !left-auto`
                  : `absolute top-[0px] right-0 w-[400px] translate-0 !left-auto`
              }
              style={{
                top: `${navbarHeight}px`,
              }}
            >
              <DialogHeader>
                <DialogTitle>
                  <h2 className="mb-3 text-center"> Shopping Cart</h2>
                  <hr />
                </DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-sm">Product name</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 border-b">
                    {/* Left Section: Image + Info */}

                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={img}
                        alt="product image"
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    {/* Quantity controls */}
                    <div className="bg-[#e9f7f1] flex items-center gap-4 rounded-full px-3 py-1">
                      <button>
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <span className="font-semibold text-[#1e8f5c]">1</span>
                      <button>
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>

                    {/* Price */}
                    <div className="ml-4 w-[60px] text-right text-sm font-semibold">
                      20 AED
                    </div>

                    {/* Close icon */}
                    <button className="ml-5 text-gray-400 hover:text-gray-600 ">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 style={{ color: "black", fontSize: "15px" }}>
                      Total Price
                    </h3>
                    <p style={{ color: "black", fontSize: "15px" }}>$ Amount</p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* profile */}
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">
            <User size={18} style={{ color: "#9cc797" }} /> Profile
          </a>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-4 py-2 md:hidden z-10">
            <div className="relative w-full mb-2">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-1 border rounded-full shadow-sm focus:outline-none"
              />
            </div>

            <a href="#" className="py-1">
              Categories
            </a>
            <a href="#" className="py-1">
              Profile
            </a>
            <a href="#" className="py-1">
              Cart
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
export default Navbar;
