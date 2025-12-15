import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-[90px] flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 text-center py-20">
          <h1 className="font-playfair text-5xl md:text-6xl text-dark-text mb-4">
            404
          </h1>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark-text mb-6">
            Page Not Found
          </h2>
          <p className="font-mont text-sm text-medium-gray max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist. Explore our beautiful jewelry collection instead.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#FF7D45] text-white font-mont font-bold text-xl tracking-[2px] px-12 py-4 hover:bg-[#FF6B2C] transition-colors"
          >
            BACK TO HOME
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
