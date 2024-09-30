import { BasePath } from "@/components/global_constants";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <div>
        <img src={"/disc-logo.png"} alt="disco logo" className="w-96 h-auto mb-8" />
        <h2 className="text-sm mb-6 sm:text-xl font-bold text-logo">Discover & Innovate for Social Change</h2>
      </div>
      <h1 className="text-xl font-bold mb-4 sm:text-6xl">
        Fall Workshop Series
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        This is a workshop series that will introduce you to the essentials of
        all things modern web development. In this workshop series, you will
        learn how to build a modern web application from scratch using the
        latest technologies and best practices.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/${BasePath.CONTENT}${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href="https://discord.gg/mqRQ7s9CyS"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Join DISC
        </Link>
      </div>
    </div>
  );
}
