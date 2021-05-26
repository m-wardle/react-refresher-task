import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { task } from './components/Task'
import AddTask, { newTask } from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<task[]>([])

  useEffect(() => {
    async function getTasks() {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks();
  }, []);

  // Fetch Tasks

  async function fetchTasks() {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    
    return data;
  }

   // Fetch Task

   async function fetchTask(id:number) {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    
    return data;
  }

  // Add Task
  
  async function addTask(task:newTask) {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks, data])
    
    // const id = tasks.length + 1;
    // const newTask = { id, ...task};
    // setTasks([...tasks, newTask])
  };

  // Delete Task

  async function deleteTask(id:number) {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  };

  // Toggle Reminder

  async function toggleReminder(id:number) {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${updatedTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) => {
      return task.id === id ? {...task, reminder: data.reminder } : task
    }));
  };
  
  return (
    <div className="container" >
      <Header titleMain="Task" showAddTask={showAddTask} onAdd={setShowAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
    : (
      "No Tasks Available"
    )}
    </div>
  );
}

export default App;
