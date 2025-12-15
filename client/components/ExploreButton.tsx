import { ArrowUpRight } from "lucide-react";

interface ExploreButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function ExploreButton({ children, className = "" }: ExploreButtonProps) {
  return (
    <button className={`bg-[#FF7D45] text-white font-mont font-bold text-sm tracking-[1px] px-6 py-4 flex items-center gap-4 hover:bg-[#FF6B2C] transition-colors ${className}`}>
      <span>{children}</span>
      <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
    </button>
  );
}
