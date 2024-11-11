import TodoForm from "./ToDoForm";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4()



export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo){
    setTodos([...todos, 
        {id: uuidv4(), 
        task: todo, 
        completed: false, 
        isEditing: false
    }]);
    console.log(todos)
  }
  function toggleComplete(id){
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  function deleteTodo(id){
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  function editTodo(id){
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }
  function editTask(task, id){
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className="TodoWrapper">
        <h1 className="item">Get Things  Done !</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo}/>
            ) : (
                <Todo 
                    task={todo} 
                    key={todo.id} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}/>
                
            ))
        )}
    </div>
  )
}




