import { useState } from "react";
import BlogList from "@/components/BlogList";
import BlogDetails from "@/components/BlogDetails";
import CreateBlogForm from "@/components/CreateBlogFrom";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="flex h-screen w-full bg-[#fcfcfc] overflow-hidden">
      <aside className="w-100 border-r bg-white flex flex-col shadow-sm">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black tracking-tight text-slate-900">CA MONK</h1>
            <CreateBlogForm />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Latest Insights</p>
        </div>
        <Separator className="opacity-50" />
        <div className="flex-1 overflow-y-auto">
          <BlogList onSelect={setSelectedId} selectedId={selectedId} />
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-slate-50/30">
        <BlogDetails id={selectedId} />
      </main>
    </div>
  );
}