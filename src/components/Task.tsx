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
}

export default function Task ({ task }: ITaskProps) {
  return (
    <div className="task">
      <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day}</p>
    </div>
  );
}
