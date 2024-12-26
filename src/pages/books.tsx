import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card } from "@/components/ui/card";
import BookList from "@/components/books/BookList";
import BookForm from "@/components/books/BookForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Book } from "@/lib/types";
import { Input } from "@/components/ui/input";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publisher: "Scribner",
      genre: "Fiction",
      quantity: 5,
      available: 3,
      language: "English",
      status: "available",
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      publisher: "Secker and Warburg",
      genre: "Science Fiction",
      quantity: 3,
      available: 0,
      language: "English",
      status: "borrowed",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (data: Partial<Book>) => {
    if (selectedBook) {
      setBooks(
        books.map((book) =>
          book.id === selectedBook.id ? { ...book, ...data } : book,
        ),
      );
    } else {
      const newBook: Book = {
        id: Math.random().toString(36).substr(2, 9),
        ...data,
        available: Number(data.quantity),
        status: "available",
      } as Book;
      setBooks([...books, newBook]);
    }
    setIsDialogOpen(false);
    setSelectedBook(null);
  };

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const handleDelete = (book: Book) => {
    setBooks(books.filter((b) => b.id !== book.id));
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedBook(null);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Book Management</h1>
            <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Book
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {selectedBook ? "Edit Book" : "Add New Book"}
                  </DialogTitle>
                </DialogHeader>
                <BookForm
                  onSubmit={handleSubmit}
                  initialData={selectedBook || {}}
                />
              </DialogContent>
            </Dialog>
          </div>

          <Card className="p-6">
            <div className="mb-6">
              <Input
                placeholder="Search books by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md"
              />
            </div>
            <BookList
              books={filteredBooks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Books;
