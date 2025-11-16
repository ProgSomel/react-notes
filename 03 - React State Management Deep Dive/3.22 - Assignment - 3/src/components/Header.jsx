import React from "react";
import LwsLogo from "./icons/LwsLogo";
import SearchLogo from "./icons/SearchLogo";
import ShoppingLogo from "./icons/ShoppingLogo";
import PeopleLogo from "./icons/PeopleLogo";
import { useCart } from "../context/CartContext";

const navList = [
  {
    name: "Shop",
    link: "#",
  },
  {
    name: "On sale",
    link: "#",
  },
  {
    name: "New Arrivals",
    link: "#",
  },
  {
    name: "Brand",
    link: "#",
  },
];

export default function Header({ searchQuery, onSearch }) {
  const { cart } = useCart();
  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <LwsLogo />
        <nav className="hidden md:flex space-x-6">
          {navList?.map((nav) => (
            <a
              key={nav?.name}
              href={nav?.link}
              className="hover:text-gray-500 transition-colors"
            >
              {nav?.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <input
              value={searchQuery}
              type="text"
              placeholder="Search for products..."
              className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
              onChange={(e) => {
                onSearch(e);
              }}
            />
            <span className="absolute right-3 top-2">
              <SearchLogo />
            </span>
          </div>
          <a
            href="#"
            className="relative hover:text-gray-500 transition-colors"
          >
            <div className="absolute rounded-full flex items-center justify-center text-[10px] -right-2 -top-2 bg-black w-4 h-4 text-white">
              {cart?.length}
            </div>
            <ShoppingLogo />
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            <PeopleLogo />
          </a>
        </div>
      </div>
    </header>
  );
}
