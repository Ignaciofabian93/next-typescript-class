import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-8 bg-blue-900 w-full h-screen text-white">
      {children}
    </main>
  );
};

export default Layout;
