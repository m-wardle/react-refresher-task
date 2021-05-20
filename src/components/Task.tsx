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
}

export default function Task ({ task, onDelete }: ITaskProps) {
  return (
    <div className="task">
      <h3>
        {task.text} 
        <FaTimes 
          style={{color: 'red', cursor: 'pointer'}}
          onClick={() => onDelete(task.id)} /></h3>
      <p>{task.day}</p>
    </div>
  );
}
