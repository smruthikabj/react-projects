import { useState } from 'react';
import '../index.css';


const Home = () => {

  const [ task, setTask ] = useState('');
  const [ tasks, setTasks ] = useState({todo: [], ongoing: [], completed: []});

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => ({
        ...prevTasks,
        todo: [...prevTasks.todo, task],
      }));
      setTask('');
    }
  };

  const moveTask = (currentCategory, targetCategory, taskToMove) => {
    setTasks((prevTasks) => {
      const updatedCurrent = prevTasks[currentCategory].filter(
        (t) => t !== taskToMove
      );

      const updatedTarget = [...prevTasks[targetCategory], taskToMove];
      
      return {...prevTasks, [currentCategory]: updatedCurrent, [targetCategory]: updatedTarget};
    });
  };

  return (
    <>
    <div className = "home">
      <form className = "task-form"
        onSubmit = {(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type = "text"
          className = "task-input"
          placeholder = "Enter a new task"
          value = {task}
          onChange = {handleInputChange}
        />

        <button
          className = "add-task-button"
          type = "submit"
          onClick = {addTask}
        >
          ADD TASK
        </button>
      </form>
      <div className = "task-sections">
        <div className = "task-section">
          <h2>To-Do Tasks</h2>
          <ul>
            {tasks.todo.map((t, index) => (
              <li key ={index}>
                {t}
                <button
                  onClick = {() => moveTask('todo', 'ongoing', t)}
                >
                  Move to Ongoing
                </button>
                <button
                  onClick = {() => moveTask('todo', 'completed', t)}
                >
                  Move to Completed
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className = "task-section">
          <h2>Ongoing Tasks Tasks</h2>
          <ul>
            {tasks.ongoing.map((t, index) => (
              <li key ={index}>
                {t}
                <button
                  onClick = {() => moveTask('ongoing', 'todo', t)}
                >
                  Move to To-Do
                </button>
                <button
                  onClick = {() => moveTask('ongoing', 'completed', t)}
                >
                  Move to Completed
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className = "task-section">
          <h2>Completed Tasks</h2>
          <ul>
            {tasks.completed.map((t, index) => (
              <li key ={index}>
                {t}
                <button
                  onClick = {() => moveTask('completed', 'todo', t)}
                >
                  Move to To-DO
                </button>
                <button
                  onClick = {() => moveTask('completed', 'ongoing', t)}
                >
                  Move to Ongoing
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home