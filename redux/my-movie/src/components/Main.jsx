import React from 'react';
import { Outlet } from 'react-router-dom';
import Tab from './Tab';

export default function Main() {
  return (
    <main>
      <Tab />
      <Outlet />
    </main>
  );
}
