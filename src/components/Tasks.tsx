import React from 'react';
import Task from './Task'

interface task {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

export interface ITasksProps {
  tasks: task[];
  onDelete: (id: number) => void;
};

export default function Tasks ({ tasks, onDelete }: ITasksProps) {

  return (
    <>
      {tasks.map((task) => {
        return (<Task key={task.id} task={task} onDelete={onDelete} />)
      })}
    </>
  );
}
