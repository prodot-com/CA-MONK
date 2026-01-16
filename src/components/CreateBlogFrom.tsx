import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "@/api/blogs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CreateBlogForm() {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  mutate({
    title: formData.get("title") as string,
    category: ["TECH"],
    description: formData.get("description") as string,
    date: new Date().toISOString(),
    coverImage: formData.get("coverImage") as string,
    content: formData.get("content") as string,
  })

  e.currentTarget.reset()
}


  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input name="title" placeholder="Title" required />
      <Input name="description" placeholder="Description" required />
      <Input name="coverImage" placeholder="Cover Image URL" required />
      <Input name="content" placeholder="Content" required />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Blog"}
      </Button>
    </form>
  )
}
