import { useEffect, useState } from "react";
import { createUserProfile } from "@/service/storeService";
import toast from "react-hot-toast";

export default function useCreateProfile(profileId: string | null, callback: () => Promise<any>) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (!profileId) {
          await createUserProfile();
          await callback();
        }
      } catch (err: unknown) {
        toast.error("Failed to create user profile");
      } finally {
        setLoading(false);
      }
    })();
  }, [profileId, callback]);
  return { loading };
}
