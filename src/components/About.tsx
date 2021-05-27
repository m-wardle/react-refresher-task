import React from 'react';
import { Link } from 'react-router-dom';

export interface IAboutProps {
}

export default function About (props: IAboutProps) {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  );
}
