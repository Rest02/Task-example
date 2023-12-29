import {ListaTareas} from "./Tasklist"
import TaskForm from "./TaskForm"
import { Tasks as data } from "./Tasks";
import { useState ,useEffect} from "react";

export function App() {

  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle){
    setTasks([...Tasks, {
      id: Tasks.length,
      titulo: taskTitle,
      estado: "iniciado"
    } ])
  }

  return (
    <div>
      <TaskForm createTask = {createTask}/>
      <ListaTareas tasks = {Tasks}/>
    </div>
  );
}
