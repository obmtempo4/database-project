import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card } from "@/components/ui/card";
import MemberList from "@/components/members/MemberList";
import MemberForm from "@/components/members/MemberForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@/lib/types";
import { Input } from "@/components/ui/input";

const Members = () => {
  const [members, setMembers] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      membershipType: "Standard",
      membershipStatus: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1987654321",
      membershipType: "Premium",
      membershipStatus: "expired",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (data: Partial<User>) => {
    if (selectedMember) {
      setMembers(
        members.map((member) =>
          member.id === selectedMember.id ? { ...member, ...data } : member,
        ),
      );
    } else {
      const newMember: User = {
        id: Math.random().toString(36).substr(2, 9),
        ...data,
        membershipStatus: "active",
      } as User;
      setMembers([...members, newMember]);
    }
    setIsDialogOpen(false);
    setSelectedMember(null);
  };

  const handleEdit = (member: User) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  const handleDelete = (member: User) => {
    setMembers(members.filter((m) => m.id !== member.id));
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedMember(null);
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Member Management</h1>
            <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Member
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {selectedMember ? "Edit Member" : "Add New Member"}
                  </DialogTitle>
                </DialogHeader>
                <MemberForm
                  onSubmit={handleSubmit}
                  initialData={selectedMember || {}}
                />
              </DialogContent>
            </Dialog>
          </div>

          <Card className="p-6">
            <div className="mb-6">
              <Input
                placeholder="Search members by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md"
              />
            </div>
            <MemberList
              members={filteredMembers}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Members;
