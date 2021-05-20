import React from 'react';
import Task from './Task'

interface task {
  id: number;
  text: string;
  day: string;
  reminder: boolean
};

export interface ITasksProps {
  tasks: task[];
};

export default function Tasks ({ tasks }: ITasksProps) {

  return (
    <>
      {tasks.map((task) => {
        return (<Task key={task.id} task={task} />)
      })}
    </>
  );
}
