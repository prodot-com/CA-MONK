import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Zap, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/10">
      <nav className="fixed top-0 w-full z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">CA MONK</span>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now powering 500+ Financial Blogs
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-linear-to-b from-slate-950 to-slate-500 bg-clip-text text-transparent">
            Write. Analyze. <br />Scale Faster.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            The ultimate publishing platform for finance and tech professionals. 
            Clean interface, powerful state management, and lightning-fast performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full gap-2 shadow-xl shadow-primary/20 cursor-pointer" onClick={onEnter}>
              Get Started for Free <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BarChart3 className="text-primary" />}
              title="Real-time Analytics"
              description="Track your blog performance with built-in TanStack Query caching and sync."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-primary" />}
              title="Secure Publishing"
              description="Enterprise-grade security for your intellectual property and financial insights."
            />
            <FeatureCard 
              icon={<Globe className="text-primary" />}
              title="Global Distribution"
              description="Your content is optimized for speed and SEO out of the box."
            />
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
          © 2026 CA Monk Assignment.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-white rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}