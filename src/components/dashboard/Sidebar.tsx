import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Calendar,
  ClipboardList,
  Home,
  Settings,
  HelpCircle,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  activeModule?:
    | "home"
    | "books"
    | "members"
    | "reservations"
    | "events"
    | "settings"
    | "help";
}

const Sidebar = ({ className = "", activeModule = "home" }: SidebarProps) => {
  const navigationItems = [
    { icon: Home, label: "Dashboard", value: "home" },
    { icon: BookOpen, label: "Books", value: "books" },
    { icon: Users, label: "Members", value: "members" },
    { icon: ClipboardList, label: "Reservations", value: "reservations" },
    { icon: Calendar, label: "Events", value: "events" },
    { icon: Settings, label: "Settings", value: "settings" },
    { icon: HelpCircle, label: "Help", value: "help" },
  ];

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

      <nav className="space-y-1">
        {navigationItems.map((item) => (
          <Button
            key={item.value}
            variant={activeModule === item.value ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2 px-2",
              activeModule === item.value && "bg-secondary",
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t">
        <div className="flex items-center gap-3 px-2">
          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
            <Users className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Admin User</span>
            <span className="text-xs text-muted-foreground">
              admin@library.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
