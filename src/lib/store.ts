import { create } from "zustand";
import { getAuthUser, getProfiles } from "@/actions/auth";

type Profile = {
  id: string;
  full_name: string;
  email: string;
  package_level: number;
  meeting: number;
};

type ProfileStore = {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  loading: true,
  error: null,
  fetchProfile: async () => {
    try {
      const authUser = await getAuthUser();
      if (authUser) {
        const profile = await getProfiles(authUser.id);
        const profileData = profile.data as Profile;
        set({ profile: profileData, loading: false });
      } else {
        set({ profile: null, loading: false, error: "No user found" });
      }
    } catch (error) {
      set({ error: "Failed to fetch profile data", loading: false });
    }
  },
}));
