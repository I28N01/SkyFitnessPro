import S from './Profile.module.scss';
import logo from '../../img/logo.png';
import ava from '../../img/ava.png';
import arrow from '../../img/arrow.png';
import yoga from '../../img/yoga.png';
import stretching from '../../img/stretching.png';
import bodyflex from '../../img/bodyflex.png';
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../database/db';


const Profile = () => {

  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [userName, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showNameForm, setShowNameForm] = useState(false);
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setDisplayName(userName);
    setShowNameForm(false);
  };
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
              <p className={S.name}>{displayName ? displayName : 'Имя'}</p>
              {!displayName && !showNameForm && (
                <button onClick={() => setShowNameForm(true)}>Введите ваше имя</button>
              )}
              {!displayName && showNameForm && (
                <form onSubmit={handleNameSubmit}>
                  <input
                    className={S.nameInput}
                    type="text"
                    placeholder="Введите ваше имя"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <button className={S.submitNameButton} type="submit">
                    Сохранить
                  </button>
                </form>
              )}
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
          <p className={S.text}> Логин: {userEmail}</p>
          <p className={S.text}> Пароль: ********</p>
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
