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
    fetchProducts: (params?: {
        brand?: string;
        productType?: string;
        search?: string;
        page?: number;
        limit?: number;
    }) => Promise<void>;
    addProduct: (formData: FormData) => Promise<void>;
    updateProduct: (id: string, formData: FormData) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
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

    fetchProducts: async (params = {}) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get("/admin/product", { params });
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

    addProduct: async (formData: FormData) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post("/admin/product", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            set((state) => ({
                products: [response.data, ...state.products],
                loading: false
            }));
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to add product";
            set({ error: message, loading: false });
            throw error;
        }
    },

    updateProduct: async (id: string, formData: FormData) => {
        set({ loading: true, error: null });
        try {
            const response = await api.patch(`/admin/product/${id}`, formData, {
                                headers: { "Content-Type": "multipart/form-data" }
            });
            set((state) => ({
                products: state.products.map((p) => (p._id === id ? response.data : p)),
                loading: false
            }));
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to update product";
            set({ error: message, loading: false });
            throw error;
        }
    },

    deleteProduct: async (id: string) => {
        set({ loading: true, error: null });
        try {
            await api.delete(`/admin/product/${id}`);
            set((state) => ({
                products: state.products.filter((p) => p._id !== id),
                loading: false
            }));
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to delete product";
            set({ error: message, loading: false });
            throw error;
        }
    },

    fetchProductBySlug: async (slug: string) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/admin/product/slug/${slug}`);
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
            const response = await api.get(`/admin/product/${id}`);
            set({ currentProduct: response.data, loading: false });
            return response.data;
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to fetch product";
            set({ error: message, loading: false, currentProduct: null });
            return null;
        }
    }
}));