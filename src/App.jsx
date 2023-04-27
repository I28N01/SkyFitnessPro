import React from 'react';
import './style.css';
import { publicRoutes } from './router';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
      ;
      <Route path="*" element={<Navigate replace to="/main" />} />
    </Routes>
  );
};

export default App;
