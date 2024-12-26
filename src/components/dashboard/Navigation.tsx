import { Button } from "@/components/ui/button";
import {
  Book,
  Users,
  Calendar,
  ClipboardList,
  Home,
  Settings,
  BadgeDollarSign,
  Building2,
  UserSquare2,
  BookCopy,
  MessageSquare,
  Archive,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navigationItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Users, label: "Members", path: "/members" },
  { icon: Book, label: "Books", path: "/books" },
  { icon: ClipboardList, label: "Reservations", path: "/reservations" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: BadgeDollarSign, label: "Fines", path: "/fines" },
  { icon: Building2, label: "Publishers", path: "/publishers" },
  { icon: UserSquare2, label: "Authors", path: "/authors" },
  { icon: BookCopy, label: "Rooms", path: "/rooms" },
  { icon: MessageSquare, label: "Feedback", path: "/feedback" },
  { icon: Archive, label: "Archives", path: "/archives" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="space-y-1">
      {navigationItems.map((item) => (
        <Button
          key={item.path}
          variant={location.pathname === item.path ? "secondary" : "ghost"}
          className="w-full justify-start gap-2 px-2"
          onClick={() => navigate(item.path)}
        >
          <item.icon className="h-5 w-5" />
          {item.label}
        </Button>
      ))}
    </nav>
  );
}
