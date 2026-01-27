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
  addBrand: (name: string) => Promise<void>;
}

export const useBrandStore = create<BrandStore>((set) => ({
  brands: [],
  loading: false,
  error: null,
  fetchBrands: async () => {
    set({ loading: true });
    try {
      const response = await api.get("/admin/brand");
      set({ brands: response.data, loading: false });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch brands";
      set({ error: message, loading: false });
    }
  },
  addBrand: async (name: string) => {
    set({ loading: true });
    try {
      const response = await api.post("/admin/brand", { name });
      set((state) => ({
        brands: [response.data, ...state.brands],
        loading: false,
      }));
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to add brand";
      set({ error: message, loading: false });
    }
  },
}));