import React from 'react';
import S from './Main.module.css';
import Logo from '../../img/Logo_.png';
import LogoText from '../../img/SkyFitnessPro_white.png';
import Sticker from '../../img/sticker.png';
import Yoga from '../../img/yoga_.png';
import Bodyflex from '../../img/bodyflex_.png';
import Dance from '../../img/dance.png';
import Aerobics from '../../img/aerobics.png';
import Stretching from '../../img/stretching_.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedWorkout } from '../../store/slices/selectedWorkoutSlice';

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const userCourses = useSelector((state) => state.userCourses.userCourses);

  const goToProfile = () => {
    navigate('/profile');
  };

  const logIn = () => {
    navigate('/login');
  };

  const handleWorkoutClick = (workoutId) => {
    if (auth && userCourses.includes(workoutId)) {
      navigate(`/workout/${workoutId}`);
    } else {
      navigate(`/workout/preview/${workoutId}`);
    }
  };
  const handleProfileClick = (workoutId) => {
    dispatch(setSelectedWorkout(workoutId));
    navigate(`/workout/${workoutId}`);
  };
  return (
    <div className={S.wrapper}>
      <div className={S.top_block}>
        <div className={S.logo_text}>
          <img className={S.logo} src={Logo} alt="logo" />
          <img className={S.text} src={LogoText} alt="text" />
        </div>
        {auth ?
          <button onClick={goToProfile} className={S.profile_button}>Мой профиль</button>
            :
          <button onClick={logIn} className={S.login_button}>Войти</button>}
      </div>

      <div className={S.caption_block}>
        <div>
          <h3 className={S.caption_small}>
            Онлайн-тренировки для занятий дома
          </h3>
          <h2 className={S.caption_big}>
            Начните заниматься спортом и улучшите качество жизни
          </h2>
        </div>
        <img className={S.sticker} src={Sticker} alt="sticker" />
      </div>

      <div className={S.content}>
        <div className={S.content_items}>
          <div onClick={() => handleWorkoutClick('sw35tf')}>
            <img className={S.content_img} src={Yoga} alt="" />
          </div>
          <div onClick={() => handleWorkoutClick('ab1c3f')}>
            <img className={S.content_img} src={Stretching} alt="" />
          </div>
          <div onClick={() => handleWorkoutClick('hu8dvl')}>
            <img className={S.content_img} src={Dance} alt="" />
          </div>
          <div onClick={() => handleWorkoutClick('fdd3ba')}>
            <img className={S.content_img} src={Aerobics} alt="" />
          </div>
          <div onClick={() => handleWorkoutClick('trq4kl')}>
            <img className={S.content_img} src={Bodyflex} alt="" />
          </div>
        </div>
      </div>
      <div className={S.footer}>
        <button className={S.up_button}>Наверх ↑</button>
      </div>
    </div>
  );
};

export default Main;