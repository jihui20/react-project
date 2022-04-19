import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <p>안녕</p>
      <Outlet />
    </main>
  );
}
