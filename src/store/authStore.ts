import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (auth: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      setAuthenticated: (auth) => set({ isAuthenticated: auth }),
    }),
    {
      name: "token",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
