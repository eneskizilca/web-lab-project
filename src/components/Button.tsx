export default function Button({ children, variant = "primary", size = "md", className = "", ...rest }: any) {

    const base = "inline-flex items-center justify-center font-medium rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

    const variants: any = {
        primary: "bg-primary text-white hover:opacity-90 focus:ring-primary dark:bg-primary dark:hover:opacity-80",
        secondary: "bg-surface text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
        danger: "bg-error text-white hover:opacity-90 focus:ring-error dark:bg-error dark:hover:opacity-80",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400 dark:text-gray-300 dark:hover:bg-gray-800",
    };

    const sizes: any = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}