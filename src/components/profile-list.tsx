import { getAllProfiles } from "@/actions/action";
import { UserCard } from "./user-card";

export const ProfileList = async () => {
  try {
    const { data: users, error } = await getAllProfiles();

    if (error) {
      console.error("Failed to load Profiles: ", error.message);
      return <p>Failed to load Profiles</p>;
    }

    if (!users || users.length === 0) {
      return <p>No users found</p>;
    }

    return (
      <div className="grid grid-rows-1 gap-3 mt-5 flew-wrap flex-row">
        {users.map((user, index) => (
          <>
            <div className="flex flex-wrap grid-rows-1">
              <UserCard key={index} user={user} />
            </div>
          </>
        ))}
      </div>
    );
  } catch (error) {
    console.error("An unexpected error occurred: ", error);
    return <p>An unexpected error occurred</p>;
  }
};
