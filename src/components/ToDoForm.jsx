import {useState} from 'react'

export default function TodoForm ({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
        //   clear form after submission
          setValue('');
        }
      };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input className="todo-input" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='What is the task today?' />
        <button className="todo-btn" type="submit">Add Task</button>
    </form>
  )
}