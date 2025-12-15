interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

export default function ProductCard({ image, title, price, description }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto transition-transform group-hover:scale-105"
        />
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-dark-text font-mont font-bold text-xs px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Shop now
        </button>
      </div>
      <div className="space-y-3 pt-2">
        <h3 className="font-playfair text-base font-600 leading-tight">{title}</h3>
        <p className="font-mont text-sm font-600 tracking-[1px] text-dark-text">{price}</p>
        <p className="font-mont text-xs text-[#9C9C9C] leading-relaxed tracking-[0.5px] line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
