import {useState} from 'react'

export default function EditTodoForm ({editTodo, task}) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          editTodo(value, task.id);
        //   clear form after submission
        //   setValue('');
        }
      };
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Udpate task' />
        <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}