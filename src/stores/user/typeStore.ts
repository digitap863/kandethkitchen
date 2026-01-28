import api from "@/lib/api";
import { create } from "zustand";

export interface Type {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface TypeStore {
  types: Type[];
  loading: boolean;
  error: string | null;
  fetchTypes: () => Promise<void>;
}

export const useTypeStore = create<TypeStore>((set) => ({
  types: [],
  loading: false,
  error: null,
  fetchTypes: async () => {
    set({ loading: true });
    try {
      const response = await api.get("/user/product-type");
      set({ types: response.data, loading: false });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch product types";
      set({ error: message, loading: false });
    }
  },
}));