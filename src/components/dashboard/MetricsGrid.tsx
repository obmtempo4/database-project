import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Calendar, Clock } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  icon = <Book className="h-4 w-4 text-muted-foreground" />,
  description = "No description available",
}: MetricCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

interface MetricsGridProps {
  metrics?: {
    totalBooks: string;
    activeMembers: string;
    pendingReservations: string;
    upcomingEvents: string;
  };
}

const MetricsGrid = ({
  metrics = {
    totalBooks: "12,483",
    activeMembers: "2,345",
    pendingReservations: "48",
    upcomingEvents: "15",
  },
}: MetricsGridProps) => {
  return (
    <div className="bg-background p-6 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Books"
          value={metrics.totalBooks}
          icon={<Book className="h-4 w-4 text-muted-foreground" />}
          description="Books in collection"
        />
        <MetricCard
          title="Active Members"
          value={metrics.activeMembers}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          description="Current library members"
        />
        <MetricCard
          title="Pending Reservations"
          value={metrics.pendingReservations}
          icon={<Clock className="h-4 w-4 text-muted-foreground" />}
          description="Awaiting pickup"
        />
        <MetricCard
          title="Upcoming Events"
          value={metrics.upcomingEvents}
          icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
          description="Next 30 days"
        />
      </div>
    </div>
  );
};

export default MetricsGrid;
