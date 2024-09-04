import React from 'react';
import './Paragraph.css';

export default function Paragraph({ children, size = null }) {
  return (
    <p className={`paragraph ${size ? 'paragraph--big' : ''}`}>
      {children}
    </p>
  )
}
