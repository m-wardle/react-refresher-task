import React from 'react';
import Task, { task } from './Task'

export interface ITasksProps {
  tasks: task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function Tasks ({ tasks, onDelete, onToggle }: ITasksProps) {

  return (
    <>
      {tasks.map((task) => {
        return (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)
      })}
    </>
  );
}
