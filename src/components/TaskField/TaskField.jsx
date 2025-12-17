import Label from "./Label";

export default function TaskField({ label, id, children }) {
    return (
        <div className="flex flex-col">
            <Label htmlFor={id}>
                {label}
            </Label>
            {children}
        </div>
    )
}