import React from 'react';
import Main from '../pages/Main/Main';
import Yoga_prev from '../pages/Workout/Yoga_prev';
import Stretching_prev from '../pages/Workout/Stretching_prev';
import Dance_prev from '../pages/Workout/Dance_prev';
import Aerobics_prev from '../pages/Workout/Aerobics_prev';
import Bodyflex_prev from '../pages/Workout/Bodyflex_prev';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import ChooseWorkout from '../pages/NewData/ChooseWorkout/ChooseWorkout';
import Profile from '../pages/Profile/Profile';
import PasswordChange from '../pages/NewData/PasswordChange/PasswordChange';
import NameChange from '../pages/NewData/NameChange/NameChange';

export const privateRoutes = [
  { path: '/profile', component: <Profile /> },
  { path: '/passchange', component: <PasswordChange /> },
  { path: '/namechange', component: <NameChange /> },
  { path: '/workout/:id', component: <ChooseWorkout /> },
  { path: '/main', component: <Main /> },
  { path: '/workout/yoga', component: <Yoga_prev /> },
  { path: '/workout/stretching', component: <Stretching_prev /> },
  { path: '/workout/dance', component: <Dance_prev /> },
  { path: '/workout/aerobics', component: <Aerobics_prev /> },
  { path: '/workout/bodyflex', component: <Bodyflex_prev /> },
];

export const publicRoutes = [
  { path: '/main', component: <Main /> },
  { path: '/workout/yoga', component: <Yoga_prev /> },
  { path: '/workout/stretching', component: <Stretching_prev /> },
  { path: '/workout/dance', component: <Dance_prev /> },
  { path: '/workout/aerobics', component: <Aerobics_prev /> },
  { path: '/workout/bodyflex', component: <Bodyflex_prev /> },
  { path: '/login', component: <Login /> },
  { path: '/Signup', component: <Signup /> },
];
