import React from 'react';
import { FaTimes } from 'react-icons/fa'

interface task {
  id: number;
  text: string;
  day: string;
  reminder: boolean
};

export interface ITaskProps {
  key: number;
  task: task
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function Task ({ task, onDelete, onToggle }: ITaskProps) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} 
        <FaTimes 
          style={{color: 'red', cursor: 'pointer'}}
          onClick={() => onDelete(task.id)} /></h3>
      <p>{task.day}</p>
    </div>
  );
}
