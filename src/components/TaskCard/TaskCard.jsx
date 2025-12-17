import PriorityLabel from "./PriorityLabel";

export default function TaskCard({ task }) {
  return (
    <div className="w-3/4 px-4 py-2 rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      <PriorityLabel priority={task.priority} />
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">
            {task.title} 
        </h3>
        <p className="text-xs underline font-light ml-2"> 
            {task.date.toLocaleString("pt-BR")} 
        </p>
      </div>
      <p className="text-sm">
        {task.description}
      </p>
    </div>
  );
}
