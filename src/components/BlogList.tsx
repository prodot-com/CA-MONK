import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogs";
import BlogCard from "./BlogCard";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

export default function BlogList({ 
  onSelect, 
  selectedId 
}: { 
  onSelect: (id: string) => void, 
  selectedId: string | null 
}) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const categories = useMemo(() => {
    if (!data) return ["ALL"];
    const allCats = data.flatMap((blog: any) => blog.category);
    return ["ALL", ...Array.from(new Set(allCats))];
  }, [data]);

  const filteredBlogs = useMemo(() => {
    if (!data) return [];
    if (activeCategory === "ALL") return data;
    return data.filter((blog: any) => blog.category.includes(activeCategory));
  }, [data, activeCategory]);

  if (isLoading) return (
    <div className="p-12 max-w-3xl mx-auto space-y-6">
      <Skeleton className="h-100 w-full rounded-2xl" />
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-24 w-full" />
    </div>
  );

  if (error) return <p className="text-red-500 p-4">Failed to load blogs</p>;

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 bg-white sticky top-0 z-10 border-b">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-2 pb-3">
            {categories.map((cat) => (
              <Badge
                key={cat}
                onClick={() => setActiveCategory(cat as string)}
                variant={activeCategory === cat ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-1 rounded-full transition-all text-[11px] font-bold ${
                  activeCategory === cat 
                    ? "bg-primary shadow-md shadow-primary/20" 
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>

      <div className="py-4 space-y-2">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog: any) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              isActive={selectedId === blog.id}
              onClick={() => onSelect(blog.id)}
            />
          ))
        ) : (
          <div className="text-center py-10 text-slate-400 text-sm">
            No blogs found in this category.
          </div>
        )}
      </div>
    </div>
  );
}