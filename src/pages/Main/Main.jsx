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
import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <div className={S.wrapper}>
      <div className={S.top_block}>
        <div className={S.logo_text}>
          <img className={S.logo} src={Logo} alt="logo" />
          <img className={S.text} src={LogoText} alt="text" />
        </div>
        <NavLink to={'/login'}>
          <button className={S.login_button}>Войти</button>
        </NavLink>
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
