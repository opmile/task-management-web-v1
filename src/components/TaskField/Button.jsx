export default function Button({ children, ...props }) {
    return (
        <button 
            className="py-2 px-4 rounded-2xl bg-primary text-white text-sm font-bold  transition-shadow duration-500 ease-in-out shadow-md hover:shadow-xl inline-block cursor-pointer self-center mt-3"
            {...props}
        >
            {children}
        </button>
    )
}