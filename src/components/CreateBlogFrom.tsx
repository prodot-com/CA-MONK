import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function CreateBlogForm() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setOpen(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate({
      title: formData.get("title") as string,
      category: ["TECH", "FINANCE"],
      description: formData.get("description") as string,
      date: new Date().toISOString(),
      coverImage: formData.get("coverImage") as string,
      content: formData.get("content") as string,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="rounded-full gap-2">
          <Plus size={16} /> New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-125">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <Input name="title" placeholder="Catchy Title" required />
          <Input name="coverImage" placeholder="Image URL (Unsplash/Pexels)" required />
          <Input name="description" placeholder="Short Summary" required />
          <Textarea name="content" placeholder="Write your thoughts here..." className="min-h-37.5" required />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Publishing..." : "Publish Post"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}