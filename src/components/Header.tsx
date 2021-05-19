import * as React from 'react';

interface HeaderProps {
  titleMain: string;
  titleName?: string; // just testing default props with object destructuring
}

export default function Header ({titleMain, titleName = "World"}: HeaderProps) {
  return (
    <div>
      <h1>{titleMain} {titleName}</h1>
    </div>
  );
}





