import React, { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Pick Up Package",
      "day": "Feb 7th at 10:00am",
      "reminder": true
    }
  ])

  // Delete Task

  function deleteTask(id:number) {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  // Toggle Reminder

  function toggleReminder(id:number) {
    setTasks(tasks.map((task) => {
      return task.id === id ? {...task, reminder: !task.reminder } : task
    }))
  }
  
  return (
    <div className="container" >
      <Header titleMain="Hello" />
      <AddTask />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
    : (
      "No Tasks Available"
    )}
    </div>
  );
}

export default App;
