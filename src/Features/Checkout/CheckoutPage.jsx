import Footer from "@/react-components/Footer";
import Navbar from "@/react-components/Navbar";
import React from "react";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom"; // Assuming react-router-dom for Link

function CheckoutPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Checkout section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px",
          padding: "5px 10px",
          border: "1px gray",
          textAlign: "center",
          gap: "8px",
        }}
      >
        <i className="fa-solid fa-less-than"></i>
        <Link to="/">
          <p style={{ color: "black", cursor: "pointer" }}>My Cart</p>
        </Link>
      </div>

      {/* Checkout box */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 p-4 md:p-6 lg:p-10">
        {/* Left column for address, promo, points, notes */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {/* Address section */}
          <Card className="w-full bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>
                <div style={{ display: "flex", gap: "8" }}>
                  <span style={{ marginRight: "10px", color: "#9cc797" }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <h1 style={{ fontSize: "20px" }}>Shipping Address</h1>
                </div>
              </CardTitle>
              <CardAction>
                <Button style={{ color: "black" }} variant="outline">
                  Change
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="p-6">
              <div className="w-full ml-2  justify-center rounded-xl" style={{backgroundColor: "#9cc797"}}>
                <div className="p-2 ml-2">
                  <h style={{ fontSize: "20px" }}>Sidharthan CK</h>
                  <p>
                    +918289846107
                    <br />
                    767, kuthuparamba, near bustop
                    <br />
                    kerala, 670701
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promo code */}
          <Card
            className="w-full bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-200"
            style={{ height: "180px" }}
          >
            <CardHeader>
              <CardTitle>
                <div style={{ display: "flex", gap: "8" }}>
                  <span style={{ marginRight: "10px", color: "#9cc797" }}>
                    <i className="fa-solid fa-hashtag"></i>
                  </span>
                  <h1 style={{ fontSize: "20px" }}>Promo code</h1>
                </div>
              </CardTitle>
              <CardDescription>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Input style={{ height: "50px" }} />
                  <Button
                    style={{
                      height: "50px",
                      marginLeft: "5px",
                      backgroundColor: "#9cc797",
                      cursor: "pointer",
                    }}
                    variant="outline"
                  >
                    Apply
                  </Button>
                </div>
                <p>invalid promocode</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6"></CardContent>
          </Card>

          {/* Spice Geln points */}
          <Card
            className="w-full bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-200"
            style={{ height: "180px" }}
          >
            <CardHeader>
              <CardTitle>
                <div style={{ display: "flex", gap: "8" }}>
                  <span style={{ marginRight: "10px", color: "#9cc797" }}>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <h1 style={{ fontSize: "20px" }}>Spice Geln points</h1>
                </div>
              </CardTitle>
              <CardDescription>
                <p
                  style={{
                    marginRight: "10px",
                    color: "black",
                    marginTop: "20px",
                  }}
                >
                  Available Points: <span>0</span>
                </p>
                <p
                  style={{
                    marginRight: "10px",
                    color: "black",
                    marginTop: "20px",
                  }}
                >
                  Use points to get discount (1 point = 1 AED)
                </p>
              </CardDescription>
              <CardAction>
                <div className="place-items-end">
                  <Switch />
                </div>
              </CardAction>
            </CardHeader>
            <CardContent className="p-6"></CardContent>
          </Card>

          {/* Order notes */}
          <Card
            className="w-full bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-200"
            style={{ height: "200px" }}
          >
            <CardHeader>
              <CardTitle>
                <div style={{ display: "flex", gap: "8" }}>
                  <span style={{ marginRight: "10px", color: "#9cc797" }}>
                    <i className="fa-solid fa-note-sticky"></i>
                  </span>
                  <h1 style={{ fontSize: "20px" }}>Order notes</h1>
                </div>
              </CardTitle>
              <CardDescription>
                <p style={{ margin: "20px" }}>
                  Add any special instructions or notes for your order
                </p>
                <Textarea />
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6"></CardContent>
          </Card>

          {/* Order details */}
          <Card
            className="w-full bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-200"
            style={{ height: "180px" }}
          >
            <CardHeader>
              <CardTitle>
                <div style={{ display: "flex", gap: "8" }}>
                  <span style={{ marginRight: "10px", color: "#9cc797" }}>
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <h1 style={{ fontSize: "20px" }}>Order details</h1>
                </div>
              </CardTitle>
              <CardDescription>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "50px",
                  }}
                >
                  <div>
                    <h1 style={{ color: "black" }}>Product Name</h1>
                    <p>
                      Qty : <span>1</span>
                    </p>
                  </div>
                  <p style={{ fontSize: "15px", color: "black" }}>
                    <span>1.00</span>AED
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Order payment method */}
          <Card
            className="w-full bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader>
              <CardTitle>
                <div style={{ display: "flex", gap: "8" }}>
                  <span style={{ marginRight: "10px", color: "#9cc797" }}>
                    <i className="fa-solid fa-bars"></i>
                  </span>
                  <h1 style={{ fontSize: "20px" }}>Order payment method</h1>
                </div>
              </CardTitle>
              <CardDescription>
                <div style={{ marginTop: "20px" }}>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 border-r-2 p-5 rounded-xl mb-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label
                        htmlFor="option-one"
                        style={{ fontSize: "18px", color: "black" }}
                      >
                        Pay by Cash On Delivery
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 border-r-2 p-5 rounded-xl mb-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label
                        htmlFor="option-two"
                        style={{ fontSize: "18px", color: "black" }}
                      >
                        Pay by Card On Delivery
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 border-r-2 p-5 rounded-xl">
                      <RadioGroupItem value="option-three" id="option-three" />
                      <Label
                        htmlFor="option-three"
                        style={{ fontSize: "18px", color: "black" }}
                      >
                        Pay using Credit
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Right column for Order Summary */}
        <Card
          className="w-full lg:w-1/3 bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-200"
          style={{ position: "sticky", top: "80px" }}
        >
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between text-sm border-b pb-2 text-gray-600">
              <span>Subtotal (1 items)</span>
              <span className="font-medium text-gray-800">7.50 AED</span>
            </div>

            <div className="flex justify-between mt-4 text-base font-semibold">
              <span>Total</span>
              <span className="text-emerald-600">7.50 AED</span>
            </div>

            <Button className="mt-6 w-full  hover:bg-emerald-700 cursor-pointer" style={{backgroundColor: "#9cc797"}}>
              Place Order
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default CheckoutPage;