import { PRIORITY } from "../../domain/priority"

const PRIORITY_STYLES = {
    [PRIORITY.HIGH]: "bg-red-100 text-red-800",
    [PRIORITY.MEDIUM]: "bg-yellow-100 text-yellow-800",
    [PRIORITY.LOW]: "bg-green-100 text-green-800"
}

export default function PriorityLabel({ priority }) {
    return (
        <div className={`px-3.5 py-0.5 inline-block rounded-full text-xs font-medium shadow-sm ${PRIORITY_STYLES[priority]}`}>
            {priority}
        </div>
    )
}