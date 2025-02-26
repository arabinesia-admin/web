import { handleSearch } from "@/actions/action";
import { UpdateForm } from "@/components/form/update-form";
import { ProfileList } from "@/components/profile-list";
import { SearchBar } from "@/components/seach-bar";

export default function Admin() {
  return (
    <div>
      <UpdateForm />
      <SearchBar onSearch={handleSearch} />
      <ProfileList />
    </div>
  );
}
