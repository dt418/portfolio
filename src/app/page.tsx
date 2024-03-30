import Hero from "@/components/main/hero";
import { cn } from "@/utils/classname";

export default function Home() {
  return (
    <main className={cn("h-full w-full")}>
      <div className="flex flex-col gap-20 h-[850px]">
        <Hero />
      </div>
    </main>
  );
}
