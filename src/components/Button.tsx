import * as React from 'react';

export interface IButtonProps {
  text: string
}

export default function Button ({text}: IButtonProps) {
  return (
    <button className='button'>{text}</button>
  );
}
