function TaskCard({task}) {
  return (
    <div key={task.id}>
      <h1>{task.titulo}</h1>
      <p>{task.estado}</p>
    </div>
  );
}

export default TaskCard