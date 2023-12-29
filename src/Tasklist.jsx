export function ListaTareas({tasks}) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.titulo}</h1>
          <p>{task.estado}</p>
        </div>
      ))}
    </div>
  );
}
