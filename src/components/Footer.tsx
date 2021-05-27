import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  const location = useLocation();
  
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {location.pathname === '/' ? 
        <Link to="/about">About</Link> :
        <Link to="/">Home</Link>
      }
    </footer>
  );
}
