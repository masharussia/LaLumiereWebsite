import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExploreButton from "@/components/ExploreButton";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d8961154862bb4d109e73fea00280a1af66e21a2?width=986",
      title: "Radiant Cluster Ring",
      price: "$645.99",
      description: "Stunning cushion-cut diamond with halo of sparkling accent stones. Perfect for an unforgettable engagement proposal or special milestone."
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/24c763283c6512cd2bbbff93a575d699525d8886?width=986",
      title: "Heritage Halo Collection",
      price: "$399.99",
      description: "Exquisite oval diamond surrounded by a timeless halo of brilliant stones. A classic design that transcends generations with elegance."
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1f9d55c8bc2a60e2311136e47fba026abd833cbd?width=986",
      title: "Crimson Desire Ring",
      price: "$549.00",
      description: "Striking deep burgundy ruby set in white gold with supporting diamonds. A bold statement piece for those who embrace luxury and passion."
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b804365ce3bc649ff3a2faa201316d58b3d4fa89?width=986",
      title: "Sapphire Dreams",
      price: "$725.50",
      description: "Royal blue sapphire with intricate diamond setting on both sides. A timeless piece inspired by elegance and refined sophistication."
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/063b08801d4ec18eed883d98ae0d710ed14ad29f?width=986",
      title: "Classic Unity Bands",
      price: "$299.99",
      description: "Matching pair of elegant rings perfect for couples. Crafted in pristine white gold with a subtle polished finish and comfortable fit."
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/25dc7d52df58ee93e426c590e8aa909b4379061e?width=986",
      title: "Diamond Solitaire",
      price: "$799.99",
      description: "Pure elegance with a single brilliant-cut diamond on a delicate band. The ultimate expression of love and commitment in its simplest form."
    }
  ];

  const categories = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2de50c9398d45c174e3334dc7862a122a9a3f997?width=922",
      title: "Women"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b8015f06b8bd81bddb78f53869dfb4c7aadc04df?width=922",
      title: "Unisex"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3f1d7f37b07b49f8339b1de36880e4522ea4f726?width=924",
      title: "Men"
    }
  ];

  const shopByCategory = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2fa63e108de2457b6b0a27d684134ed137ee3aec?width=986",
      title: "Wrist ware"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/52ba9d5e436f3e36448e4c14cf804e6fd08f1a2d?width=986",
      title: "Fingre ware"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a0eba3238bcf1479c7f87a0ae354adb4ac100829?width=986",
      title: "Neck ware"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[90px]">
        <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="min-w-full h-full bg-[#191516] flex items-center relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b229aa779eebbdab0e3240e947f00338f4c8dbd1?width=1672"
                alt="Jewelry"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-[130%] w-auto object-cover"
              />
              <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-6xl leading-[113.3%] text-white max-w-[808px]">
                  Delicate. Radiant. Forever yours.
                </h2>
              </div>
            </div>

            <div className="min-w-full h-full bg-white flex items-center relative">
              <img
                src="https://images.pexels.com/photos/13152506/pexels-photo-13152506.jpeg"
                alt="Luxury Diamond Ring"
                className="absolute right-0 top-0 h-full w-1/2 object-cover"
              />
              <div className="w-1/2 px-6 lg:px-12 relative z-10">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-6xl leading-[113.3%] text-[#373737] max-w-[808px]">
                  Rings that are made just for you
                </h2>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-32 h-0.5 transition-colors ${
                  currentSlide === index ? "bg-[#D9D9D9]" : "bg-[#4A4A4A]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="py-24 container mx-auto px-6 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#3E3E3E] text-center mb-6">
            Most popular of all time
          </h2>
          <p className="font-mont text-sm text-[#9C9C9C] text-center max-w-[884px] mx-auto mb-16 tracking-[0.7px] leading-relaxed">
            Discover our most sought-after jewelry pieces crafted with precision and elegance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="flex justify-end">
            <ExploreButton>Explore</ExploreButton>
          </div>
        </section>

        <section className="bg-[#050507] py-24 lg:py-28 relative overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6eb9c0b7774321563d322730a68a7a338f3aaa69?width=2550"
            alt="Gold jewelry"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[130%] w-auto object-cover"
          />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-6xl leading-normal mb-8 max-w-[790px]">
              <span className="text-white">Finest </span>
              <span className="text-[#F6BA1F]">gold</span>
              <span className="text-white"> from Paris</span>
            </h2>
            <ExploreButton>Explore</ExploreButton>
          </div>
        </section>

        <section className="py-20 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>

        <section className="bg-[#B8B6BB] py-24 lg:py-28 relative overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/718c4b52ec9837709fd917e3e748c86112ceb049?width=4550"
            alt="Textured jewelry"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[130%] w-auto object-cover"
          />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-6xl leading-normal text-[#474747] mb-8 max-w-[899px]">
              Finest texture that never washes away
            </h2>
            <ExploreButton>Explore</ExploreButton>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6 lg:px-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#3E3E3E] text-center mb-16">
            Shop by category
          </h2>

          <div className="overflow-x-auto pb-8 -mx-6 px-6">
            <div className="flex gap-8 min-w-min">
              {shopByCategory.map((category, index) => (
                <div key={index} className="flex-shrink-0 w-[320px] md:w-[400px] lg:w-[493px]">
                  <div className="relative group overflow-hidden mb-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-auto transition-transform group-hover:scale-105"
                    />
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-dark-text font-mont font-bold text-sm px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Shop now
                    </button>
                  </div>
                  <h3 className="font-mont font-semibold text-lg uppercase text-center">
                    {category.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#010204] py-28 relative overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/91b5caceb30550b6d99cfbfa4360492db837300c?width=1586"
            alt="Newsletter"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[150%] w-auto object-cover"
          />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="bg-white max-w-[822px] ml-auto p-10 md:p-14 rounded-lg">
              <h2 className="font-playfair text-3xl md:text-4xl text-[#010204] mb-6">
                Let us keep you updated
              </h2>
              <p className="font-mont text-xs text-[#010204] mb-8 tracking-[0.7px] leading-relaxed">
                Subscribe to our exclusive newsletter and receive special offers, new collections, and jewelry inspiration delivered directly to your inbox.
              </p>
              <ExploreButton>Subscribe</ExploreButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
