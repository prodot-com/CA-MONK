import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { Blog } from "../types/blog"

export default function BlogCard({
  blog,
  onClick,
}: {
  blog: Blog
  onClick: () => void
}) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:shadow-md transition"
    >
      <CardHeader>
        <p className="text-xs text-gray-500">
          {blog.category.join(" • ")}
        </p>
        <CardTitle>{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{blog.description}</p>
      </CardContent>
    </Card>
  )
}
