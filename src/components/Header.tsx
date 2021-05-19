import * as React from 'react';
import Button from './Button'

export interface IHeaderProps {
  titleMain: string;
  titleName?: string; // just testing default props with object destructuring
}

export default function Header ({titleMain, titleName = "World"}: IHeaderProps) {
  return (
    <header className='header'>
      <h1>{titleMain} {titleName}</h1>
      <Button text="Add"/>
    </header>
  );
}
