import React, { ReactNode } from "react";
import { HiOutlineCollection } from "react-icons/hi";
import { HiOutlineTag } from "react-icons/hi";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-58 bg-white shadow-md">
        <div className="p-2 font-bold text-xl border-b">Inventory Admin</div>
        <nav className="p-2 space-y-2 text-sm text-orange-600">
          <a
            href="#"
            className="px-3 py-2 rounded hover:bg-orange-100 transition flex justify-start items-center gap-2"
          >
            <span className=""><HiOutlineCollection/></span>
            Dashboard
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded hover:bg-orange-100 transition flex justify-start items-center gap-2"
          >
            <span><HiOutlineTag/></span>
            Products
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {/* Add user profile or search here later */}
        </header>

        {children}
      </main>
    </div>
  );
}
