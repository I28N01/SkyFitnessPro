import S from './Profile.module.scss';
import logo from '../../img/logo.png';
import ava from '../../img/ava.png';
import arrow from '../../img/arrow.png';
import yoga from '../../img/yoga.png';
import stretching from '../../img/stretching.png';
import bodyflex from '../../img/bodyflex.png';
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../database/db';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated } from '../../store/slices/authSlice';

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

  const isAuthenticated = useSelector((state) => state.auth);
  const userCourses = useSelector((state) => state.userCourses.userCourses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    dispatch(setIsAuthenticated(false));
    localStorage.removeItem('auth');
    navigate('/main');
  };

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



  const handlePasswordChange = () => {
    navigate('/passchange');
  };

  const handleLoginChange = () => {
    navigate('/namechange');
  };

  const handleYogaClick = () => {
    navigate('/workout/yoga');
  };

  const handleStretchingClick = () => {
    navigate('/workout/stretching');
  };

  const handleBodyflexClick = () => {
    navigate('/workout/bodyflex');
  };
  const handleCourseClick = (e) => {
    const courseId = e.currentTarget.dataset.id;
  
    if (userCourses.includes(courseId)) {
      navigate(`/workout/${courseId}`);
    } else {
      // Можете показать сообщение об ошибке или выполнить другое действие, если пользователь не имеет доступа к этому курсу.
    }
  };

  return (
    <div className={S.container}>
      <div className={S.main}>
        <div className={S.header}>
          <NavLink to={'/main'} className={S.logoBlock}>
            <img className={S.logo} src={logo} alt="logo" />
          </NavLink>
          <div className={S.userBlock}>
            <div className={S.avaBlock}>
              <img className={S.ava} src={ava} alt="avatar" />
            </div>
            <div className={S.nameBlock}>
              <p className={S.name}>{displayName ? displayName : 'Имя'}</p>
              {!displayName && !showNameForm && (
                <button onClick={() => setShowNameForm(true)}>
                  Введите ваше имя
                </button>
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
            <div className={S.arrowBlock}>
              <img
                className={S.arrow}
                onClick={arrowClickHandler}
                src={arrow}
                alt="arrow"
              />
              {isOpen && (
                <div className={S.exit}>
                  <button className={S.buttonExit} onClick={handleExit}>
                    Выход
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={S.profileBlock}>
          <h2 className={S.title}> Мой профиль</h2>
          <p className={S.text}> Логин: {userEmail}</p>
          <p className={S.text}> Пароль: ********</p>
          <button className={S.button} onClick={handleLoginChange}>
            {' '}
            Редактировать логин
          </button>
          <button className={S.button} onClick={handlePasswordChange}>
            {' '}
            Редактировать пароль
          </button>
        </div>
        <div className={S.courseBlock}>
          <div className={S.titleBlock}>
            <h2 className={S.titleCourse}> Мои курсы</h2>
          </div>
          <div className={S.courseCardBlock}>
            <div
              className={S.courseCard}
              data-id="sw35tf"
              onClick={handleCourseClick}
            >
              <img className={S.card} src={yoga} alt="yoga" />
              <button className={S.buttonCard}>Перейти →</button>
            </div>
            <div
              className={S.courseCard}
              data-id="ab1c3f"
              onClick={handleCourseClick}
            >
              <img className={S.card} src={stretching} alt="stretching" />
              <button className={S.buttonCard}>Перейти →</button>
            </div>
            <div
              className={S.courseCard}
              data-id="trq4kl"
              onClick={handleCourseClick}
            >
              <img className={S.card} src={bodyflex} alt="bodyflex" />
              <button className={S.buttonCard}>Перейти →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
