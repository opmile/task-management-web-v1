import { PRIORITY_OPTIONS } from "../../ui/priorityOptions";
import { Input } from "../TaskField";
import Button from "../TaskField/Button";
import Dropdown from "../TaskField/Dropdown";
import TaskField from "../TaskField/TaskField";
import Textarea from "../TaskField/Textarea";
import TaskMainTitle from "../TaskMainTitle";

export default function TaskForm({ onSubmit }) {

    function handleFormSubmission(formData) {
        const task = {
            title: formData.get("task-title"),
            description: formData.get("task-description"),
            priority: formData.get("task-priorities"),
            date: new Date(formData.get("task-date"))
        }
        onSubmit(task)
    }

  return (
    <form 
        className="flex flex-col gap-4 w-2/5 bg-gray-100 px-8 py-7 rounded-2xl shadow-lg transition-shadow hover:shadow-xl duration-700"
        onSubmit={(e) => {
            e.preventDefault()

            const form = e.currentTarget
            const formData = new FormData(form)

            handleFormSubmission(formData)

            form.reset()
        }}
    >
      <TaskMainTitle>New task</TaskMainTitle>

      <hr className="border-gray-300"/>

      <div className="flex flex-col gap-4">
        <TaskField label="Task name" id="task-title">
            <Input
                type="text"
                id="task-title"
                name="task-title"
                placeholder="task title"
            />
        </TaskField>

        <TaskField label="Task description" id="task-description">
            <Textarea 
                id="task-description" 
                name="task-description" 
                placeholder="task description" 
            />
        </TaskField>

        <TaskField label="Priority" id="task-priorities">
            <Dropdown 
                id="task-priorities" 
                name="task-priorities" 
                items={PRIORITY_OPTIONS}
            />
        </TaskField>

        <TaskField label="Due date" id="task-title">
            <Input
                type="datetime-local"
                id="task-date"
                name="task-date"
            />
        </TaskField>
      </div>

      <hr className="mt-3 border-gray-300"/>

      <Button type="submit">
        create task
      </Button>

    </form>
  );
}
