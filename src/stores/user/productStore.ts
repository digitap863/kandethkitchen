import api from "@/lib/api";
import { create } from "zustand";

export interface Product {
    _id: string;
    title: string;
    slug: string;
    desc: string;
    productType: string;
    brand: string;
    img: string[];
    mrp: string;
    offer: string;
    keyFeatures: string[];
    specifications: string[];
    createdAt: string;
    updatedAt: string;
}

interface Pagination {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

interface ProductStore {
    products: Product[];
    pagination: Pagination | null;
    loading: boolean;
    error: string | null;
    latestProducts: Product[];
    fetchLatestProducts: () => Promise<void>;
    fetchProducts: (params?: {
        brand?: string;
        productType?: string;
        search?: string;
        page?: number;
        limit?: number;
    }) => Promise<void>;
    fetchProductBySlug: (slug: string) => Promise<Product | null>;
    fetchProductById: (id: string) => Promise<Product | null>;
        currentProduct: Product | null;
    
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    pagination: null,
    currentProduct: null,
    loading: false,
    error: null,
    latestProducts: [],

    fetchProducts: async (params = {}) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get("/user/product", { params });
            set({
                products: response.data.products,
                pagination: response.data.pagination,
                loading: false
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to fetch products";
            set({ error: message, loading: false });
        }
    },

    fetchProductBySlug: async (slug: string) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/user/product/${slug}`);
            set({ currentProduct: response.data, loading: false });
            return response.data;
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to fetch product";
            set({ error: message, loading: false, currentProduct: null });
            return null;
        }
    },

    fetchProductById: async (id: string) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/user/product/${id}`);
            set({ currentProduct: response.data, loading: false });
            return response.data;
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to fetch product";
            set({ error: message, loading: false, currentProduct: null });
            return null;
        }
    },

    fetchLatestProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get("/user/latest-product");
            set({ latestProducts: response.data, loading: false });
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to fetch latest products";
            set({ error: message, loading: false });
        }
    }
}));