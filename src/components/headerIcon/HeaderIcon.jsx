import React from 'react';

export default function HeaderIcon({ icon, width, height, alt }) {
  return (
    <img src={icon} width={width} height={height} alt={alt} />
  )
}
