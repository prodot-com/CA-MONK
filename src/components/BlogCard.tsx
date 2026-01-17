import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "../types/blog";

export default function BlogCard({
  blog,
  onClick,
  isActive
}: {
  blog: Blog;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <Card
      onClick={onClick}
      className={`group mx-4 p-4 cursor-pointer transition-all duration-300 border shadow-none hover:bg-slate-50 ${
        isActive ? "bg-slate-100 ring-1 ring-slate-200" : "bg-transparent"
      }`}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {blog.category.map((cat) => (
          <Badge key={cat} variant="secondary" className="text-[10px] font-bold px-2 py-0">
            {cat}
          </Badge>
        ))}
      </div>
      <h3 className={`font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors`}>
        {blog.title}
      </h3>
      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
        {blog.description}
      </p>
    </Card>
  );
}