import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/home" className="mr-6 ml-4 px-2 flex items-center">
            <span className="hidden font-bold sm:inline-block">HAVEN</span>
          </Link>
        </div>
        <div className="flex mr-3 flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link to="/home" className="mr-6 ml-2 flex items-center space-x-2 md:hidden">
              <span className="font-bold">HAVEN</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/profile" className="text-sm font-medium">Profile</Link>
            <Link to="/booking-history" className="text-sm font-medium">Booking History</Link>
            <Link to="/partner" className="text-sm font-medium">Partner with Us</Link>
            <Link to="/support" className="text-sm font-medium">Support</Link>
          </nav>
          <button className="md:hidden border p-2 rounded" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-0 w-[75%] bg-black h-screen p-4">
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6 text-white" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="flex flex-col space-y-4 mt-10 text-white">
            <Link to="/profile" className="text-lg font-medium">Profile</Link>
            <Link to="/booking-history" className="text-lg font-medium">Booking History</Link>
            <Link to="/partner" className="text-lg font-medium">Partner with Us</Link>
            <Link to="/support" className="text-lg font-medium">Support</Link>
            <hr className="border-primary-foreground/20" />
            <Link to="/settings" className="text-lg font-medium">Settings</Link>
            <Link to="/privacy" className="text-lg font-medium">Privacy Policy</Link>
            <Link to="/terms" className="text-lg font-medium">Terms of Service</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;