import Hero from "@/components/main/hero";
import { cn } from "@/utils/classname";
// import StarCanvas from "@/components/main/star-canvas";

export default function Home() {
  return (
    <main className={cn("h-full w-full")}>
      <div className="flex flex-col gap-20 h-full">
        <Hero />
      </div>
    </main>
  );
}
