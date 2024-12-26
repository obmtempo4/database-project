import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, User, Calendar, RotateCcw } from "lucide-react";

interface Activity {
  id: string;
  type: "reservation" | "return" | "registration";
  title: string;
  user: string;
  date: string;
  status: "completed" | "pending" | "new";
}

interface ActivityTableProps {
  activities?: Activity[];
}

const defaultActivities: Activity[] = [
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
];

const ActivityTable = ({
  activities = defaultActivities,
}: ActivityTableProps) => {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "reservation":
        return <Book className="h-4 w-4" />;
      case "return":
        return <RotateCcw className="h-4 w-4" />;
      case "registration":
        return <User className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: Activity["status"]) => {
    const variants = {
      completed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      new: "bg-blue-100 text-blue-800",
    };

    return (
      <Badge className={variants[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <Card className="w-full bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Activities</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Type</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getActivityIcon(activity.type)}
                  <span className="capitalize">{activity.type}</span>
                </div>
              </TableCell>
              <TableCell>{activity.title}</TableCell>
              <TableCell>{activity.user}</TableCell>
              <TableCell>{activity.date}</TableCell>
              <TableCell>{getStatusBadge(activity.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ActivityTable;
