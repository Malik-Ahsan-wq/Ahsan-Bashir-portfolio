import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const pricingPlans = [
  {
    title: "Premium",
    rate: "$48/h",
    duration: "20hrs",
    description: "10 hours per week",
  },
  {
    title: "Standard",
    rate: "$35/h",
    duration: "15hrs",
    description: "7.5 hours per week",
  },
  {
    title: "Basic",
    rate: "$25/h",
    duration: "10hrs",
    description: "5 hours per week",
  },
];

const Pricing = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-20">
      <section className="w-full max-w-7xl">
        <h3 className="text-lg text-orange-400 mb-2">Pricing</h3>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 my-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-2xl">
            Stay child and pick your{" "}
            <span className="text-orange-400">Plan</span>
          </h1>
          <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded hover:bg-white hover:text-black hover:border hover:border-black transition">
            Contact for custom project
            <MdOutlineArrowOutward />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="mb-4">
                <h3 className="uppercase text-gray-600 text-sm">
                  {plan.title}
                </h3>
                <h2 className="text-2xl font-semibold text-orange-400">
                  {plan.rate}
                </h2>
              </div>
              <h1 className="text-3xl font-bold mb-2">{plan.duration}</h1>
              <div className="flex items-center justify-between text-gray-500">
                <p>{plan.description}</p>
                <MdOutlineArrowOutward className="text-4xl hover:text-orange-400 duration-150" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
