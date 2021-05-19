import React from 'react';

interface task {
  id: number;
  text: string;
  day: string;
  reminder: boolean
}
export interface ITasksProps {
  tasks: task[];
}

export default function Tasks ({ tasks }: ITasksProps) {

  return (
    <>
      {tasks.map((task) => {
        return (<h3 key={task.id}>{task.text}</h3>)
      })}
    </>
  );
}
