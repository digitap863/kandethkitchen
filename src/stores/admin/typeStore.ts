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
  addType: (name: string) => Promise<void>;
}

export const useTypeStore = create<TypeStore>((set) => ({
  types: [],
  loading: false,
  error: null,
  fetchTypes: async () => {
    set({ loading: true });
    try {
      const response = await api.get("/admin/product-type");
      set({ types: response.data, loading: false });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch product types";
      set({ error: message, loading: false });
    }
  },
  addType: async (title: string) => {
    set({ loading: true });
    try {
      const response = await api.post("/admin/product-type", { title });
      set((state) => ({
        types: [response.data, ...state.types],
        loading: false,
      }));
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to add product type";
      set({ error: message, loading: false });
    }
  },
}));