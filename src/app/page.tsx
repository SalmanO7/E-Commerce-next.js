import React from "react";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <div className="w-full text-center">
      <Header />
      <div className=" w-full pt-16 px-10 sm:px-16 lg:px-24">
        <Home />
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default page;
