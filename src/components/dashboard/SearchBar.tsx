import React from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFilter?: (filters: string[]) => void;
}

const SearchBar = ({
  onSearch = () => {},
  onFilter = () => {},
}: SearchBarProps) => {
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);

  const filterOptions = [
    "Books",
    "Members",
    "Reservations",
    "Events",
    "Recent Returns",
    "New Registrations",
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilters((current) => {
      const updated = current.includes(filter)
        ? current.filter((f) => f !== filter)
        : [...current, filter];
      onFilter(updated);
      return updated;
    });
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-10 w-full"
            placeholder="Search library resources..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters ({activeFilters.length})
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {filterOptions.map((filter) => (
              <DropdownMenuCheckboxItem
                key={filter}
                checked={activeFilters.includes(filter)}
                onCheckedChange={() => handleFilterChange(filter)}
              >
                {filter}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SearchBar;
