import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import { PRIORITY } from "./domain/priority";
import Header from "./components/Header";

function App() {

  const [ tasks,  setTasks ] = useState([
    {
      title: "resolve issue #34",
      description: "apply automated tests to api controller",
      priority: PRIORITY.HIGH,
      date: new Date()
    },
    {
      title: "raise requirements feature #34",
      description: "apply automated tests to api controller",
      priority: PRIORITY.MEDIUM,
      date: new Date()
    }
  ])

  function addEvent(event) {
    setTasks([ ...tasks, event ])
  }

  return (
    <main className="mt-4 min-h-screen flex flex-col items-center justify-center gap-8 font-display text-black">
      <Header/>

      <TaskForm onSubmit={addEvent} />

      <Tasks tasks={tasks}/>
      
    </main>
  );
}

export default App;
