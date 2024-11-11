

// export default function Todo({task}) {
//   return (
//     <div className="Todo">
//         <p>{task.task}</p>
//         <div>
//             <button>edit</button>
//             <button>remove</button>
//         </div>
//     </div>
//   )
// }




export default function Todo({task, toggleComplete, deleteTodo, editTodo}){
  return (
    <div  className="Todo">
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed": ""}`}>{task.task}</p>
        <div>
            <button onClick={() => editTodo(task.id)} className="todo-btn">edit</button>
            <button onClick={() => deleteTodo(task.id)} className="todo-btn">delete</button>
        </div>
    </div>
  )
}