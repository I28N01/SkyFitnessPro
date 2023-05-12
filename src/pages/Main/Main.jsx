import React, { useContext, useEffect, useState } from 'react';
import S from './Main.module.css';
import Logo from '../../img/Logo_.png';
import LogoText from '../../img/SkyFitnessPro_white.png';
import Sticker from '../../img/sticker.png';
import Yoga from '../../img/yoga_.png';
import Bodyflex from '../../img/bodyflex_.png';
import Dance from '../../img/dance.png';
import Aerobics from '../../img/aerobics.png';
import Stretching from '../../img/stretching_.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Main = () => {

  const { auth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate();


//   useEffect(() => {
//     if (localStorage.getItem('auth')) {
        // setAuth(true);
//     }

// }, []);

function logIn() {
  // setAuth(true);
  // localStorage.setItem('auth', 'true')
  navigate('/Login');

}

function goToProfile() {
  navigate('/profile');
}


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
          <NavLink to={'/workout/yoga'}>
            <img className={S.content_img} src={Yoga} alt="" />
          </NavLink>
          <NavLink to={'/workout/stretching'}>
            <img className={S.content_img} src={Stretching} alt="" />
          </NavLink>
          <NavLink to={'/workout/dance'}>
            <img className={S.content_img} src={Dance} alt="" />
          </NavLink>
          <NavLink to={'/workout/aerobics'}>
            <img className={S.content_img} src={Aerobics} alt="" />
          </NavLink>
          <NavLink to={'/workout/bodyflex'}>
            <img className={S.content_img} src={Bodyflex} alt="" />
          </NavLink>
        </div>
      </div>
      <div className={S.footer}>
        <button className={S.up_button}>Наверх ↑</button>
      </div>
    </div>
  );
};

export default Main;
