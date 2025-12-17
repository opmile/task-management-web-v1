import { TaskCard } from "../TaskCard";

export default function Tasks({ tasks }) {
    return (
        <div className="w-5/6 mb-10 flex justify-center flex-wrap gap-8">
            {
                tasks.map((task, index) => (
                    <TaskCard key={index} task={task}/>
                ))
            }
        </div>
    )
}