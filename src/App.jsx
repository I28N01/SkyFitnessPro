import React, { useEffect } from 'react';
import './style.css';
import { privateRoutes, publicRoutes } from './router/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated } from './store/slices/authSlice';
import { setLoading } from './store/slices/loadingSlice';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setIsAuthenticated(true));
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <div />;
  }

  return (
    <Routes>
      {auth
        ? privateRoutes.map((route) => (
            <Route path={route.path} element={route.component} key={route.path} />
          ))
        : publicRoutes.map((route) => (
            <Route path={route.path} element={route.component} key={route.path} />
          ))}
      <Route path="*" element={<Navigate replace to={auth ? '/profile' : '/main'} />} />
    </Routes>
  );
};

export default App;