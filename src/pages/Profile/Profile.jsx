import S from './Profile.module.scss';
import logo from '../../img/logo.png';
import ava from '../../img/ava.png';
import arrow from '../../img/arrow.png';
import yoga from '../../img/yoga.png';
import stretching from '../../img/stretching.png';
import bodyflex from '../../img/bodyflex.png';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

  const [isOpen, setIsOpen] = useState(false);
  const arrowClickHandler = () => setIsOpen(!isOpen);

  const navigate = useNavigate()

  const handleExit = () => {
    navigate('/main')
  }

  const handlePasswordChange = () => {
    navigate('/passchange')
  }

  const handleLoginChange = () => {
    navigate('/namechange')
  }

  const handleYogaClick = () => {
    navigate('/workout/yoga')
  }

  const handleStretchingClick = () => {
    navigate('/workout/stretching')
  }

  const handleBodyflexClick = () => {
    navigate('/workout/bodyflex')
  }

  return (
    <div className={S.container}>
      <div className={S.main}>
        <div className={S.header}>
          <div className={S.logoBlock}>
            <img className={S.logo} src={logo} alt="logo" />
          </div>
          <div className={S.userBlock}>
            <div className={S.avaBlock}>
              <img className={S.ava} src={ava} alt="avatar" />
            </div>
            <div className={S.nameBlock}>
              <p className={S.name}>Сергей</p>
            </div>
            <div className={S.arrowBlock} >
              <img className={S.arrow} onClick={arrowClickHandler} src={arrow} alt="arrow" />
              {isOpen && 
              <div className={S.exit}>
                <button className={S.buttonExit} onClick={handleExit}>Выход</button>
                </div>}
            </div>
          </div>
        </div>
        <div className={S.profileBlock}>
          <h2 className={S.title}> Мой профиль</h2>
          <p className={S.text}> Логин: sergey.petrov96</p>
          <p className={S.text}> Пароль: 4fkhdj880d</p>
          <button className={S.button} onClick={handleLoginChange}> Редактировать логин</button>
          <button className={S.button} onClick={handlePasswordChange}> Редактировать пароль</button>
        </div>
        <div className={S.courseBlock}>
          <div className={S.titleBlock}>
            <h2 className={S.titleCourse}> Мои курсы</h2>
          </div>
          <div className={S.courseCardBlock}>
            <div className={S.courseCard}>
              <img className={S.card} src={yoga} alt="yoga" />
              <button className={S.buttonCard} onClick={handleYogaClick}> Перейти →</button>
            </div>
            <div className={S.courseCard}>
              <img className={S.card} src={stretching} alt="stretching" />
              <button className={S.buttonCard} onClick={handleStretchingClick}> Перейти →</button>
            </div>
            <div className={S.courseCard}>
              <img className={S.card} src={bodyflex} alt="bodyflex" />
              <button className={S.buttonCard} onClick={handleBodyflexClick}> Перейти →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
