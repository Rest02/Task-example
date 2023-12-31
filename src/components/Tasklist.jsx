import TaskCard from "./taskCard"

export function ListaTareas({tasks, deleteTask}) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}
