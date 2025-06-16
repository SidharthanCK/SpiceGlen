import React from "react";
import spiceglenicon from "../assets/spiceglen_icon.png";
function Footer() {
  return (
    <div>
      <footer className="bg-[#637C5A] text-white px-6 pt-10 pb-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="md:w-1/3 mb-10 md:mb-0">
            <img src={spiceglenicon} alt="Spice Glen" className="mb-4 w-32" />
            <h3 className="font-semibold">Our Company</h3>
            <p className="mt-1 font-medium">
              Welcome to Spice Glen - the home of Simply Good Food
            </p>
            <p className="text-sm mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              erat in urna hendrerit efficitur in sed nulla. Sed venenatis nunc
              sed sem lacinia consequat
            </p>
            <div className="flex gap-4 mt-4">
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span>
                <i className="fa-brands fa-x-twitter"></i>
              </span>
              <span>
                <i className="fa-brands fa-youtube"></i>
              </span>
              <span>
                <i className="fa-brands fa-linkedin"></i>
              </span>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="flex flex-col sm:flex-row gap-16">
            {/* Shop */}
            <div>
              <h4 className="font-semibold mb-3">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>All Products</li>
                <li>Culinary Speciality</li>
                <li>Powdered Spices</li>
                <li>Kitchen</li>
                <li>Gifting</li>
                <li>Recipes</li>
                <li>Blogs</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>Support</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Payments</li>
                <li>Orders</li>
                <li>Accounts</li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-semibold mb-3">About Us</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Careers</li>
                <li>Stores</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#444] mt-10 pt-4 flex flex-col gap-3 items-center text-sm">
          <p>@2025 Spice Glen.</p>
          <div className="flex justify-center flex-wrap gap-4 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
