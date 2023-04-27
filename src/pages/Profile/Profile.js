import S from './Profile.module.scss';
import logo from '../../img/logo.png';
import ava from '../../img/ava.png';
import arrow from '../../img/arrow.png';
import yoga from '../../img/yoga.png';
import stretching from '../../img/stretching.png';
import bodyflex from '../../img/bodyflex.png';


const Profile = () => {
    return (
        <div className={S.container}>
            <div className={S.main}>
                <div className={S.header}>
                    <div className={S.logoBlock}>
                        <img className={S.logo} src={logo} alt="logo"/>
                    </div>
                    <div className={S.userBlock}>
                        <div className={S.avaBlock}>
                            <img className={S.ava} src={ava} alt="avatar"/>
                        </div>
                        <div className={S.nameBlock}>
                            <p className={S.name}>Сергей</p>
                        </div>
                        <div className={S.arrowBlock}>
                            <img className={S.arrow} src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div className={S.profileBlock}>
                    <h2 className={S.title}> Мой профиль</h2>
                    <p className={S.text}> Логин: sergey.petrov96</p>
                    <p className={S.text}> Пароль: 4fkhdj880d</p>
                    <button className={S.button}> Редактировать логин</button>
                    <button className={S.button}> Редактировать пароль</button>
                </div>
                <div className={S.courseBlock}>
                    <div className={S.titleBlock}>
                        <h2 className={S.titleCourse}> Мои курсы</h2>
                    </div>
                    <div className={S.courseCardBlock}>
                        <div className={S.courseCard}>
                                <img className={S.card} src={yoga} alt="yoga"/>
                                <button className={S.buttonCard}> Перейти →</button>
                        </div>
                        <div className={S.courseCard}>
                                <img className={S.card} src={stretching} alt="stretching"/>
                                <button className={S.buttonCard}> Перейти →</button>
                        </div>
                        <div className={S.courseCard}>
                                <img className={S.card} src={bodyflex} alt="bodyflex"/>
                                <button className={S.buttonCard}> Перейти →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;