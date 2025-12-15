import ExploreButton from "./ExploreButton";

interface CategoryCardProps {
  image: string;
  title: string;
}

export default function CategoryCard({ image, title }: CategoryCardProps) {
  return (
    <div className="relative group overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-auto transition-transform group-hover:scale-105"
      />
      <div className="absolute bottom-8 left-6">
        <ExploreButton>{title}</ExploreButton>
      </div>
    </div>
  );
}
