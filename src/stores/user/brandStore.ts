import api from "@/lib/api";
import { create } from "zustand";

export interface Brand {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface BrandStore {
  brands: Brand[];
  loading: boolean;
  error: string | null;
  fetchBrands: () => Promise<void>;
}

export const useBrandStore = create<BrandStore>((set) => ({
  brands: [],
  loading: false,
  error: null,
  fetchBrands: async () => {
    set({ loading: true });
    try {
      const response = await api.get("/user/brand");
      set({ brands: response.data, loading: false });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch brands";
      set({ error: message, loading: false });
    }
  },
}));