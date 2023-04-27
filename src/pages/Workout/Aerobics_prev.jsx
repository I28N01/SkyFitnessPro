import React from 'react';
import S from './Workout_preview.module.css'
import Logo from '../../img/Logo_.png'
import LogoText from '../../img/SkyFitnessPro_black.png'
import Card from '../../img/yoga_card.png'
import Item_pic from '../../img/item_svg.png'
import { NavLink } from 'react-router-dom';


const Aerobics_prev = () => {
  return (
    <div className={S.wrapper} >
      <NavLink to={'/main'} className={S.logo_text} >
          <img className={S.logo} src={Logo} alt="logo"/>
          <img className={S.text} src={LogoText} alt="text"/>
      </NavLink>
      <div className={S.img_block}>
        <img className={S.card} src={Card} alt=""/>
      </div>
    <div className={S.infoblock}>
      <h2 className={S.caption}>Подойдет для вас, если:</h2>
      <div className={S.info_items}>
      <div className={S.info_item}>
      <div className={S.info_cirlce}>
            <p className={S.info_number}>1</p>
          </div>
          <div className={S.info_text}>Хотите укрепить дыхательную и сердечно-сосудистой системы</div>
      </div>
      <div className={S.info_item}>
      <div className={S.info_cirlce}>
            <p className={S.info_number}>2</p>
          </div>
          <div className={S.info_text}>Быстрый сбросить лишние килограммы</div>
      </div><div className={S.info_item}>
          <div className={S.info_cirlce}>
            <p className={S.info_number}>3</p>
          </div>
          <div className={S.info_text}>Улучшить настроение, повысить жизненный тонус</div>
      </div>
      </div>
     
    </div>
    <div>
      <h2 className={S.list_caption} >Направления:</h2>
      <div className={S.lists}>
      <ul className={S.list} >
          <li className={S.list_item}>Для начинающих</li>
          <li className={S.list_item}>Для похудения</li>
          <li className={S.list_item}>Для детей</li>
        </ul>
      </div>
    
    </div>

    <h3 className={S.info}>
        Степ-аэробика – направление фитнеса, основанное на наборе аэробных упражнений,
         выполняемых с помощью специальной ступеньки (степ-платформы). Данное направление
         было разработано в 1989 году Джиной Миллер: травмировав колено, она обратилась к
         различным методикам восстановления сустава, но наибольший эффект показали простые
         упражнения в виде шагов на молочном ящике. Впоследствии эти упражнения Миллер положила
         в основу целого комплекса, который и стал называться степ-аэробикой.
    </h3>

    <h3 className={S.info_3}>
        Занятия степ-аэробикой состоят из комплексов в виде различного сочетания шагов,
        выполняемые под музыку с довольно высоким темпом. Каждое занятие длится от 30 до
        50 минут в достаточно высоком темпе без остановок на отдых – для передышки используются
        переходы на простые шаги и наиболее простые упражнения. Такой режим тренировок приводит к
        эффективному сжиганию калорий, укреплению суставов и общему улучшению состояния здоровья,
        что и стало основой высокой популярности нового направления.
    </h3>


    <div className={S.footer} >
      <div className={S.infoblock_bottom} >
        <h2 className={S.info_2}> 
          Оставьте заявку на пробное занятие, мы свяжемся 
          с вами, поможем с выбором направления и тренера, 
          с которым тренировки принесут здоровье и радость!
        </h2>
        <button className={S.button} >Записаться на тренировку</button>
      </div>
      <div>
        <img className={S.pic} src={Item_pic} alt="" />
      </div>
    </div>

    </div>
  )
}

export default Aerobics_prev;