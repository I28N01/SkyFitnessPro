import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import S from './Workout_preview.module.css';
import Logo from '../../img/Logo_.png';
import LogoText from '../../img/SkyFitnessPro_black.png';
import Item_pic from '../../img/item_svg.png';
import { NavLink, useParams } from 'react-router-dom';
import { useGetWorkoutByIdQuery } from '../../api/api';
import { setSelectedWorkout, clearSelectedWorkout } from '../../store/slices/selectedWorkoutSlice';
import Card from '../../img/yoga_card.png'

const Aerobics_prev = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: workout } = useGetWorkoutByIdQuery(id); // Загрузка тренировки по ID
  const selectedWorkout = useSelector((state) => state.selectedWorkout);

  useEffect(() => {
    if (workout) {
      dispatch(setSelectedWorkout(workout));
    }
    return () => {
      dispatch(clearSelectedWorkout());
    };
  }, [workout, id, dispatch]);

  if (!selectedWorkout) {
    return <div>Loading...</div>;
  }
  return (
    <div className={S.wrapper}>
      <NavLink to={'/main'} className={S.logo_text}>
        <img className={S.logo} src={Logo} alt="logo" />
        <img className={S.text} src={LogoText} alt="text" />
      </NavLink>
      <div className={S.img_block}>
        <img className={S.card} src={Card} alt="" />
      </div>
      <div className={S.infoblock}>
        <h2 className={S.caption}>Подойдет для вас, если:</h2>
        <div className={S.info_items}>
          {selectedWorkout.forwhom && selectedWorkout.forwhom.map((item, index) => (
            <div className={S.info_item} key={index}>
              <div className={S.info_cirlce}>
                <p className={S.info_number}>{index + 1}</p>
              </div>
              <div className={S.info_text}>{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className={S.list_caption}>Направления:</h2>
        <div className={S.lists}>
          <ul className={S.list}>
          {selectedWorkout.direction && selectedWorkout.direction.map((item, index) => (
              <li className={S.list_item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className={S.info}>{selectedWorkout.description}</h3>

      <div className={S.footer}>
        <div className={S.infoblock_bottom}>
          <h2 className={S.info_2}>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!
          </h2>
          <button className={S.button}>Записаться на тренировку</button>
        </div>
        <div>
          <img className={S.pic} src={Item_pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aerobics_prev;