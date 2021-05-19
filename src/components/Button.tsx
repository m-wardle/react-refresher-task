import * as React from 'react';

export interface IButtonProps {
  text: string;
  colour?: string;
  onClick: () => void;
}

export default function Button ({text, colour = "grey", onClick}: IButtonProps) {
  return (
    <button 
      className='btn' 
      style={{backgroundColor: colour}}
      onClick={onClick}
     >
      {text}
    </button>
  );
}
