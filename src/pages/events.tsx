import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card } from "@/components/ui/card";
import EventList from "@/components/events/EventList";
import EventForm from "@/components/events/EventForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Event } from "@/lib/types";
import { Input } from "@/components/ui/input";

const Events = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      name: "Summer Reading Challenge",
      date: "2024-06-01T10:00",
      capacity: 100,
      organizer: "Library Staff",
      attendees: 45,
      status: "upcoming",
    },
    {
      id: "2",
      name: "Author Meet & Greet",
      date: "2024-02-15T14:00",
      capacity: 50,
      organizer: "Events Team",
      attendees: 50,
      status: "completed",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (data: Partial<Event>) => {
    if (selectedEvent) {
      setEvents(
        events.map((event) =>
          event.id === selectedEvent.id ? { ...event, ...data } : event,
        ),
      );
    } else {
      const newEvent: Event = {
        id: Math.random().toString(36).substr(2, 9),
        ...data,
        attendees: 0,
        status: "upcoming",
      } as Event;
      setEvents([...events, newEvent]);
    }
    setIsDialogOpen(false);
    setSelectedEvent(null);
  };

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleDelete = (event: Event) => {
    setEvents(events.filter((e) => e.id !== event.id));
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Event Management</h1>
            <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {selectedEvent ? "Edit Event" : "Add New Event"}
                  </DialogTitle>
                </DialogHeader>
                <EventForm
                  onSubmit={handleSubmit}
                  initialData={selectedEvent || {}}
                />
              </DialogContent>
            </Dialog>
          </div>

          <Card className="p-6">
            <div className="mb-6">
              <Input
                placeholder="Search events by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md"
              />
            </div>
            <EventList
              events={filteredEvents}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Events;
