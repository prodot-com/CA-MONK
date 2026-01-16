import { useState } from "react"
import BlogList from "@/components/BlogList"
import BlogDetails from "@/components/BlogDetails"
import CreateBlogForm from "@/components/CreateBlogFrom"

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="space-y-6">
        <CreateBlogForm />
        <BlogList onSelect={setSelectedId} />
      </div>
      <div className="md:col-span-2">
        <BlogDetails id={selectedId} />
      </div>
    </div>
  )
}
