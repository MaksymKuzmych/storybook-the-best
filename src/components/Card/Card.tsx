import React from 'react';

interface iCardProps {
  title: string;
  backgroundColor: string;
  padding: '10px' | '20px' | '30px';
}

export const Card = ({ title, backgroundColor, padding }: iCardProps) => {
  return (
    <div style={{ padding, backgroundColor }}>{title} NEW CHANGES APPLIED</div>
  );
};
