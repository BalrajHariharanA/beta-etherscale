import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer";

const AppLayout = ({ children }) => {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex">
        <section className="flex flex-col flex-1">{children}</section>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default AppLayout;
