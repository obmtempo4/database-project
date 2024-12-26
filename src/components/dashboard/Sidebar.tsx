import React from "react";
import { cn } from "@/lib/utils";
import { Navigation } from "./Navigation";
import { BookOpen } from "lucide-react";

interface SidebarProps {
  className?: string;
  activeModule?: string;
}

const Sidebar = ({ className = "", activeModule }: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full w-[280px] bg-background border-r px-4 py-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-2 mb-8">
        <BookOpen className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-semibold">Library System</h1>
      </div>

      <Navigation />
    </div>
  );
};

export default Sidebar;
