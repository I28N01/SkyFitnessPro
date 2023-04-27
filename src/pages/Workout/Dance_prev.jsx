import React from 'react';
import S from './Workout_preview.module.css'
import Logo from '../../img/Logo_.png'
import LogoText from '../../img/SkyFitnessPro_black.png'
import Card from '../../img/yoga_card.png'
import Item_pic from '../../img/item_svg.png'
import { NavLink } from 'react-router-dom';


const Dance_prev= () => {
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
          <div className={S.info_text}>Хотите укрепить мышцы, но тренировки в тренажерном зале для вас скучные и однообразные</div>
      </div>
      <div className={S.info_item}>
      <div className={S.info_cirlce}>
            <p className={S.info_number}>2</p>
          </div>
          <div className={S.info_text}>Хотите сбросить лишний вес, но нет желания мучать себя диетами</div>
      </div><div className={S.info_item}>
          <div className={S.info_cirlce}>
            <p className={S.info_number}>3</p>
          </div>
          <div className={S.info_text}>Любите танцы и хотите совместить приятное с полезным</div>
      </div>
      </div>
     
    </div>
    <div>
      <h2 className={S.list_caption} >Направления:</h2>
      <div className={S.lists}>
      <ul className={S.list} >
          <li className={S.list_item}>Зумба</li>
          <li className={S.list_item}>Dance-mix</li>
          <li className={S.list_item}>Caribbean-mix</li>
        </ul>
      </div>
    
    </div>

    <h3 className={S.info}>
        Фитнес и танцы – что между ними общего? А то, что они могут великолепно 
        сочетаться и оказывать просто восхитительный эффект на ваше тело! Объединение 
        хореографии и аэробики – это необычно и интересно, именно так родился танцевальный 
        фитнес, которым вы теперь можете заниматься дома. Достичь отличной формы и при этом 
        получить удовольствие вам поможет видео для похудения, которое мы представляем на этой 
        странице – делайте упражнения, танцуйте и чувствуйте, как ваше тело меняется в лучшую сторону!
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

export default Dance_prev;