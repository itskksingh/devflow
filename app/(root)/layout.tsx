import Navbar from "@/components/navigation/navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-row">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
