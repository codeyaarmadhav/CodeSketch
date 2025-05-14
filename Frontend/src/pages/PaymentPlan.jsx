import React from "react";
import handlePayment from "../utils/razorpay.js";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link } from "react-router";
import Subscribe from "../Components/Subscribe.jsx";
import Title from "../Components/Title.jsx";

function PaymentPlan() {
  const basic = [
    "Access to UML Diagrams",
    "Access to Basic Diagrams",
    "Export Diagrams",
    "Upto 5 project saves",
    "Basic Support",
  ];

  const standard = [
    "Access to every Diagram Generator",
    "Everything in Basic Plan",
    "Upto 50 Project saves",
    "Priority Support"
  ]

  return (
    <div>
      <Title text1="Upgrade" text2={"Plan"} />
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-15 intems-center justify-between sm:px-40 sm:my-5 sm:mb-15">
        <div className="flex flex-col border border-gray-100 shadow-lg rounded-lg p-5 w-full gap-5">
          <h1 className="text-3xl font-semibold prata-regular">Basic Plan</h1>

          <div className="flex gap-2">
            <span className="text-xl text-gray-700">&#8377;</span>
            <p className="text-5xl">0</p>
          </div>

          <Link to="/create">
            <button className="bg-[#a0a7ac] text-white text-md md:text-lg rounded-xl p-1 w-full cursor-pointer">
              Use Now
            </button>
          </Link>

          <div className="px-4">
            {basic.map((item, index) => (
              <div key={index} className="flex items-center gap-2 my-2">
                <img src={assets.tick} alt="tick" className="h-4 w-4" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-xs">Limits Apply</p>
        </div>

        <div className="flex flex-col border border-gray-100 shadow-lg rounded-lg p-5 w-full gap-5">
          <h1 className="text-3xl font-semibold prata-regular">Standard Plan</h1>

          <div className="flex gap-2">
            <span className="text-xl text-gray-700">&#8377;</span>
            <p className="text-5xl">49</p>
          </div>

          <button onClick={() => handlePayment(49)} className="bg-[#a0a7ac] text-white text-md md:text-lg rounded-xl p-1 w-full cursor-pointer">
            Upgrage Now
          </button>

          <div className="px-4">
            {standard.map((item, index) => (
              <div key={index} className="flex items-center gap-2 my-2">
                <img src={assets.tick} alt="tick" className="h-4 w-4" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-xs">Limits Apply</p>
        </div>
      </div>

      <Subscribe />
    </div>
  );
}

export default PaymentPlan;
