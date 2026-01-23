"use client";

import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Hide sidebar on login page
  const showSidebar = pathname !== "/admin/login";

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {showSidebar && <Sidebar />}
      <main className={showSidebar ? "ml-64" : ""}>{children}</main>
    </div>
  );
};

export default Layout;