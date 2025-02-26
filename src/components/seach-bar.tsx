import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("search") as string;
    onSearch(query);
  };

  return (
    <form className="flex items-center w-full max-w-lg mx-2 md:mx-auto gap-1">
      <div className="relative flex-1">
        <Input
          type="text"
          name="search"
          placeholder="Search..."
          className="w-full pl-10 py-2 rounded-lg bg-background border border-gray-300  transition-all duration-200 shadow-sm hover:shadow-md"
          aria-label="Search"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
      <Button
        type="submit"
        disabled={true}
        className="rounded-lg h-9 p-2 mr-4 bg-brand-primary hover:bg-brand-dark text-white shadow-sm hover:shadow-md transition-all duration-200"
      >
        Search
      </Button>
    </form>
  );
};
