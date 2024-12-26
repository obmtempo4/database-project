export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  membershipType: string;
  membershipStatus: "active" | "expired" | "suspended";
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  quantity: number;
  available: number;
  language: string;
  status: "available" | "reserved" | "borrowed";
}

export interface Event {
  id: string;
  name: string;
  date: string;
  capacity: number;
  organizer: string;
  attendees: number;
  status: "upcoming" | "ongoing" | "completed";
}

export interface Fine {
  id: string;
  userId: string;
  amount: number;
  reason: string;
  status: "paid" | "unpaid";
  dueDate: string;
}

export interface Reservation {
  id: string;
  userId: string;
  bookId: string;
  status: "pending" | "approved" | "rejected" | "completed";
  requestDate: string;
  dueDate: string;
}
