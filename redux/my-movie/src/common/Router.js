import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Main from '../components/Main';
import Movie from '../pages/Movie';
import Favorites from '../pages/Favorites';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/movie/list" />} />
      <Route path="movie/*" element={<Main />}>
        <Route path="list" element={<Movie />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default Router;
