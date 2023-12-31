function TaskCard({task, deleteTask}) {
  return (
    <div key={task.id}>
      <h1>{task.titulo}</h1>
      <p>{task.descripcion}</p>
      <button onClick={() => deleteTask(task.id)}>
        Eliminar tarea...
      </button>
    </div>
  );
}

export default TaskCard