import React, { ReactNode } from "react";
import { HiOutlineCollection } from "react-icons/hi";
import { HiOutlineTag } from "react-icons/hi";
import { HiOutlineTable } from "react-icons/hi";

interface LayoutProps {
  children: ReactNode;
}
const menuItems = [
    {
      href: "/",
      label: "Dashboard",
      icon: <HiOutlineCollection />,
    },
    {
      href: "#",
      label: "Category",
      icon: <HiOutlineTable />,
    },
    {
      href: "/product",
      label: "Products",
      icon: <HiOutlineTag />,
    },
  ];
function MenuItem({ href, label, icon }:any) {
  return (
    <a
      href={href}
      className={`px-3 py-2 rounded transition flex justify-start items-center gap-2 text-sm text-gray-500 hover:bg-purple-400 hover:text-white`}
    >
      <span className="text-base">{icon}</span>
      {label}
    </a>
  );
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-purple-100">
      {/* Sidebar */}
      <aside className="w-58 bg-white mt-3 ms-3 mb-3">
        <div className="p-2 font-bold text-xl border-b text-purple-400 text-center">
          Inventory Admin
        </div>
        <nav className="p-2 space-y-2 text-sm text-gray-500">
          {menuItems.map(({ href, label, icon }:any) => (
          <MenuItem
            key={label}
            href={href}
            label={label}
            icon={icon}
          />
        ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <header className="m-3 flex justify-between items-center">
          <div className="bg-white w-full p-2">
            <h1 className="text-xl font-bold ps-4">Dashboard</h1>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
