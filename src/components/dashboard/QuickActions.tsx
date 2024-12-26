import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus } from "lucide-react";

interface QuickActionsProps {
  onAddBook?: () => void;
  onAddMember?: () => void;
}

const QuickActions = ({
  onAddBook = () => console.log("Add book clicked"),
  onAddMember = () => console.log("Add member clicked"),
}: QuickActionsProps) => {
  return (
    <div className="w-full h-[60px] bg-white p-4 rounded-lg shadow-sm flex items-center justify-end gap-4">
      <Button
        variant="outline"
        onClick={onAddBook}
        className="flex items-center gap-2"
      >
        <PlusCircle className="h-4 w-4" />
        Add New Book
      </Button>
      <Button
        variant="outline"
        onClick={onAddMember}
        className="flex items-center gap-2"
      >
        <UserPlus className="h-4 w-4" />
        Add New Member
      </Button>
    </div>
  );
};

export default QuickActions;
