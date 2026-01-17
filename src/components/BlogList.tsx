import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/api/blogs"
import BlogCard from "./BlogCard"


export default function BlogList({ onSelect, selectedId }: { onSelect: (id: number) => void, selectedId: number | null }) {

    const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  if (isLoading) return <p>Loading blogs...</p>
  if (error) return <p className="text-red-500">Failed to load blogs</p>
  return (
    <div className="py-4 space-y-2">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          isActive={selectedId === blog.id}
          onClick={() => onSelect(blog.id)}
        />
      ))}
    </div>
  );
}