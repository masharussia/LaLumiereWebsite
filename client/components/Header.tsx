import { Link } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-[33px]">
      <div className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between gap-8">
        <Link to="/" className="flex-shrink-0">
          <h1 className="font-playfair font-semibold text-xl tracking-[0px] italic">
            <span className="text-[#363636]">La </span>
            <span className="text-[#FF9559]">Lumière</span>
          </h1>
        </Link>

        <nav className="hidden lg:flex items-center gap-12">
          <Link to="/" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-black hover:text-orange transition-colors">
            All New
          </Link>
          <Link to="/offers" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-black hover:text-orange transition-colors">
            Offers
          </Link>
          <Link to="/category" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-black hover:text-orange transition-colors">
            Category
          </Link>
          <Link to="/gifts" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-black hover:text-orange transition-colors">
            Gifts
          </Link>
          <Link to="/contact" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-black hover:text-orange transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="hover:text-orange transition-colors" aria-label="Search">
            <Search className="w-6 h-6" />
          </button>
          <button className="hover:text-orange transition-colors" aria-label="Account">
            <User className="w-6 h-6" />
          </button>
          <button className="hover:text-orange transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF9559] rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
