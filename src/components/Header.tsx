import * as React from 'react';
import Button from './Button'

export interface IHeaderProps {
  titleMain: string;
  titleName?: string; // just testing default props with object destructuring
  showAddTask: boolean;
  onAdd: (toggle:boolean) => void;
}

export default function Header ({titleMain, titleName = "Tracker", showAddTask, onAdd }: IHeaderProps) {
  
  return (
    <header className='header'>
      <h1>{titleMain} {titleName}</h1>
      {showAddTask ? <Button text="Cancel" colour="red" onClick={() => onAdd(false)}/> : <Button text="Add" colour="green" onClick={() => onAdd(true)}/>}
    </header>
  );
}
