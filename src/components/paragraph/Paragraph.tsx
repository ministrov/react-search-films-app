import React from 'react';
import './Paragraph.css';

export default function Paragraph({ text, size = null }) {
  return (
    <p className={`paragraph ${size ? 'paragraph--big' : ''}`}>
      {text}
    </p>
  )
}
