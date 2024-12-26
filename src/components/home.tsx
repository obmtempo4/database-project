import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MetricsGrid from "@/components/dashboard/MetricsGrid";
import SearchBar from "@/components/dashboard/SearchBar";
import ActivityTable from "@/components/dashboard/ActivityTable";
import QuickActions from "@/components/dashboard/QuickActions";

interface HomeProps {
  metrics?: {
    totalBooks: string;
    activeMembers: string;
    pendingReservations: string;
    upcomingEvents: string;
  };
  activities?: Array<{
    id: string;
    type: "reservation" | "return" | "registration";
    title: string;
    user: string;
    date: string;
    status: "completed" | "pending" | "new";
  }>;
}

const Home = ({
  metrics = {
    totalBooks: "12,483",
    activeMembers: "2,345",
    pendingReservations: "48",
    upcomingEvents: "15",
  },
  activities = [
    {
      id: "1",
      type: "reservation",
      title: "The Great Gatsby",
      user: "John Doe",
      date: "2024-01-20",
      status: "pending",
    },
    {
      id: "2",
      type: "return",
      title: "1984",
      user: "Jane Smith",
      date: "2024-01-19",
      status: "completed",
    },
    {
      id: "3",
      type: "registration",
      title: "New Member Registration",
      user: "Alice Johnson",
      date: "2024-01-18",
      status: "new",
    },
  ],
}: HomeProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          <MetricsGrid metrics={metrics} />
          <div className="space-y-4">
            <SearchBar
              onSearch={(query) => console.log("Search:", query)}
              onFilter={(filters) => console.log("Filters:", filters)}
            />
            <QuickActions />
            <ActivityTable activities={activities} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
