import React from "react";
import Icon from "./ui/Icon";
import Link from "./ui/Link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="#" className="text-2xl font-bold" isNavItem={false}>
          LWS.SHOP
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="#">Shop</Link>
          <Link to="#">On Sale</Link>
          <Link to="#">New Arrivals</Link>
          <Link to="#">Brands</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
            />
            <span className="absolute right-3 top-2">
              <Icon className="h-5 w-5 text-gray-400" name="search" />
            </span>
          </div>

          <Link to="#">
            <Icon className="h-6 w-6" name="cart" />
          </Link>

          <a href="#">
            <Icon className="h-6 w-6" name="men" />
          </a>
        </div>
      </div>
    </header>
  );
}
