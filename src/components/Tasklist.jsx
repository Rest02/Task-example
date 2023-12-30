import TaskCard from "./taskCard"

export function ListaTareas({tasks}) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}
