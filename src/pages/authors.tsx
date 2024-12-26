import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card } from "@/components/ui/card";

const Authors = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeModule="authors" />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          <h1 className="text-3xl font-bold">Author Management</h1>
          <Card className="p-6">
            {/* Author management content will go here */}
            <p>Author management interface coming soon...</p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Authors;
