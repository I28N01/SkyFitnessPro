import React, { useEffect, useState } from 'react';
import './style.css';
import { privateRoutes, publicRoutes } from './router';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/authContext';

const App = () => {


  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);


    useEffect(() => {
      if (localStorage.getItem('auth')) {
          setAuth(true);
      }
      setLoading(false);
  }, []);

  if (loading) {
    return <div/>
  }
  return auth ? (
    <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading,
            }}
        > 
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
      ;
      <Route path="*" element={<Navigate replace to="/profile" />} />
    </Routes>
   </AuthContext.Provider>)
    :
    (<AuthContext.Provider
      value={{
          auth,
          setAuth,
          loading,
      }}
  > 
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
      ;
      <Route path="*" element={<Navigate replace to="/main" />} />
    </Routes>

    </AuthContext.Provider>
  );
};

export default App;