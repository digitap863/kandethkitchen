"use client"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "@/stores/admin/authStore";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const { adminLogin, loading, error: storeError, clearError } = useAuthStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Clear any previous errors
        clearError();

        // Call the login function from the store
        const result = await adminLogin(email, password);

        if (result.success) {
            // Redirect to admin dashboard on success
            router.push("/admin/dashboard");
        }
        // Error handling is done by the store
    };

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleInputChange = () => {
        // Clear errors when user starts typing
        if (storeError) {
            clearError();
        }
    };
    return (
        <section className="min-h-screen flex items-center justify-center font-raleway">
            <div className="flex flex-col items-center w-full">
                <div className="max-w-4xl w-full  relative overflow-hidden px-5 py-16">
                    <div className="h-42 w-42 absolute bg-[#F80202] blur-[150px]  top-10 left-40" />
                    <div className="h-42 w-42 absolute bg-white blur-[300px] bottom-10 left-40" />
                    <div className="h-42 w-42 absolute bg-white/70 blur-[150px] bottom-10 right-40" />
                    <div className="relative z-50">
                        <h1 className="text-[38px] md:text-[44px] text-[#CCCCCC] mb-6 text-center">
                            Welcome Back Admin !
                        </h1>
                        <p className="md:text-lg text-[16px] text-[#BFBFBF] mb-12 max-w-lg mx-auto text-center">
                            Please sign in to continue
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyUp={handleInputChange}
                                    className="w-full px-6 py-5 bg-[#0D0D0D] shadow-[inset_0px_0px_0px_1px_#262626] rounded-full text-gray-100 placeholder-[#CCCCCC]"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyUp={handleInputChange}
                                        className="w-full px-6 py-5 bg-[#0D0D0D] shadow-[inset_0px_0px_0px_1px_#262626] rounded-full text-gray-100 placeholder-[#CCCCCC]"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-5 top-4 text-gray-500 dark:text-gray-300"
                                        onClick={handleTogglePasswordVisibility}
                                    >
                                        {isPasswordVisible ? (
                                            <Eye size={30} />
                                        ) : (
                                            <EyeOff size={30} />
                                        )}
                                    </button>
                                </div>
                            </div>
                            {storeError && <p className="text-red-600 text-sm">{storeError}</p>}
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-8 w-full flex justify-center  py-4 bg-[#A40F0F] cursor-pointer rounded-full text-gray-100 text-md font-medium transition-colors  items-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;