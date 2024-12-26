import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Event } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventListProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (event: Event) => void;
}

export default function EventList({
  events,
  onEdit,
  onDelete,
}: EventListProps) {
  const getStatusColor = (status: Event["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "ongoing":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Attendees</TableHead>
            <TableHead>Organizer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.name}</TableCell>
              <TableCell>{new Date(event.date).toLocaleString()}</TableCell>
              <TableCell>{event.capacity}</TableCell>
              <TableCell>{event.attendees}</TableCell>
              <TableCell>{event.organizer}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(event.status)}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(event)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(event)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
