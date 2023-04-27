import React from 'react';
import S from './Workout_preview.module.css'
import Logo from '../../img/Logo_.png'
import LogoText from '../../img/SkyFitnessPro_black.png'
import Card from '../../img/yoga_card.png'
import Item_pic from '../../img/item_svg.png'
import { NavLink } from 'react-router-dom';


const Yoga_prev = () => {
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
          <div className={S.info_text}>Давно хотели попробовать йогу, но не решались начать.</div>
      </div>
      <div className={S.info_item}>
      <div className={S.info_cirlce}>
            <p className={S.info_number}>2</p>
          </div>
          <div className={S.info_text}>Хотите укрепить позвоночник, избавиться от болей в спине и суставах.</div>
      </div><div className={S.info_item}>
          <div className={S.info_cirlce}>
            <p className={S.info_number}>3</p>
          </div>
          <div className={S.info_text}>Ищете активность, полезную для тела и души.</div>
      </div>
      </div>
     
    </div>
    <div>
      <h2 className={S.list_caption} >Направления:</h2>
      <div className={S.lists}>
      <ul className={S.list} >
          <li className={S.list_item}>Йога для новичков</li>
          <li className={S.list_item}>Классическая йога</li>
          <li className={S.list_item}>Йогатерапия</li>
        </ul>
        <ul className={S.list} >
          <li className={S.list_item}>Кундалини-йога</li>
          <li className={S.list_item}>Хатха-йога</li>
          <li className={S.list_item}>Аштанга-йога</li>
        </ul>
      </div>
    
    </div>

    <h3 className={S.info}>
      Благодаря комплексному воздействию упражнений происходит проработка всех 
      групп мышц, тренировка суставов, улучшается циркуляция крови. 
      Кроме того, упражнения дарят отличное настроение, 
      заряжают бодростью и помогают противостоять стрессам. 
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

export default Yoga_prev;