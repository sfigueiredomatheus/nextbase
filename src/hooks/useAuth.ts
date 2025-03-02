import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/authStore";

export const useAuth = () => {
  const router = useRouter();
  const { isAuthenticated, setAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(true);

  const restrictedRoutesForAuthUsers = ["/auth/login", "/auth/register"];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, [setAuthenticated]);

  useEffect(() => {
    if (!loading) {
      const isRestricted = restrictedRoutesForAuthUsers.includes(
        router.pathname
      );

      if (isAuthenticated && isRestricted) {
        router.push("/dashboard");
      } else if (!isAuthenticated && !isRestricted) {
        router.push("/auth/login");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, loading, router]);

  return { isAuthenticated, loading };
};
