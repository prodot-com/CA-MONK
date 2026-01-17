import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogs";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, User } from "lucide-react";

export default function BlogDetails({ id }: { id: number | null }) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

  if (!id) return (
    <div className="h-full flex items-center justify-center text-slate-400 font-medium">
      Select an article to start reading
    </div>
  );

  if (isLoading) return (
    <div className="p-12 max-w-3xl mx-auto space-y-6">
      <Skeleton className="h-100 w-full rounded-2xl" />
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-24 w-full" />
    </div>
  );

  return (
    <div className="p-8 md:p-16 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <img 
        src={data?.coverImage} 
        className="w-full h-112.5 object-cover rounded-[2rem] shadow-2xl mb-10 border-4 border-white"
        alt="cover"
      />
      
      <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
        <span className="flex items-center gap-1.5"><Calendar size={16}/> {new Date(data?.date!).toLocaleDateString()}</span>
        <span className="flex items-center gap-1.5"><Clock size={16}/> 5 min read</span>
      </div>

      <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-tight">
        {data?.title}
      </h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-xl text-slate-600 leading-relaxed font-light italic mb-8 border-l-4 border-primary/30 pl-6">
          {data?.description}
        </p>
        <p className="text-lg text-slate-700 leading-loose whitespace-pre-wrap">
          {data?.content}
        </p>
      </div>
    </div>
  );
}