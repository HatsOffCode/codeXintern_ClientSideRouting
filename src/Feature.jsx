import React from "react";
import { BarChart3, Wallet, TrendingUp, FileDown, Search, Moon } from "lucide-react";

function Features() {
  const features = [
    {
      title: "Add & Manage Expenses",
      desc: "Easily add, edit, categorize, and track all your daily or monthly expenses.",
      icon: <Wallet size={32} />,
    },
    {
      title: "Dashboard Overview",
      desc: "View spending summaries with clean charts and insightful analytics.",
      icon: <BarChart3 size={32} />,
    },
    {
      title: "Budget Tracking",
      desc: "Set monthly budgets and get alerts when you overspend.",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Export Reports",
      desc: "Download your data anytime in PDF, CSV, or Excel formats.",
      icon: <FileDown size={32} />,
    },
    {
      title: "Advanced Search & Filters",
      desc: "Find any record instantly using smart filters and search options.",
      icon: <Search size={32} />,
    },
    {
      title: "Dark / Light Mode",
      desc: "Switch themes for a modern and comfortable viewing experience.",
      icon: <Moon size={32} />,
    },
  ];

  return (
    <section className="py-16 bg-slate-100" id="features">
      <div className=" bg-slate-50 w-[100%] max-w-6xl mx-auto px-6 text-center rounded-lg">

        {/* Section Heading */}
        <h2 className="text-4xl text-blue-600 font-bold mb-4">Features</h2>
        <p className="text-gray-600 font-semibold mb-12">
          E-Recorder gives you all the tools you need to manage expenses effortlessly.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4 text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
        <br />
      </div>
    </section>
  );
}

export default Features;
