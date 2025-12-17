export default function Label({ children, ...props }) {
    return (
        <label className="ml-1 text-base font-medium" {...props}>
            {children}
        </label>
    )
}