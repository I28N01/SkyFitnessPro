import React from 'react';
import S from './Workout_preview.module.css'
import Logo from '../../img/Logo_.png'
import LogoText from '../../img/SkyFitnessPro_black.png'
import Card from '../../img/yoga_card.png'
import Item_pic from '../../img/item_svg.png'
import { NavLink } from 'react-router-dom';


const Bodyflex_prev = () => {
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
          <div className={S.info_text}>Хотите укрепить легкие и снизить вероятность заболеваний дыхательной системы</div>
      </div>
      <div className={S.info_item}>
      <div className={S.info_cirlce}>
            <p className={S.info_number}>2</p>
          </div>
          <div className={S.info_text}>Улучшить пищеварение</div>
      </div><div className={S.info_item}>
          <div className={S.info_cirlce}>
            <p className={S.info_number}>3</p>
          </div>
          <div className={S.info_text}>Ускорить метаболизм</div>
      </div>
      </div>
     
    </div>
    <div>
      <h2 className={S.list_caption} >Направления:</h2>
      <div className={S.lists}>
      <ul className={S.list} >
          <li className={S.list_item}>базовый</li>
          <li className={S.list_item}>продвинутый</li>
        </ul>
      </div>
    
    </div>

    <h3 className={S.info}>
        BodyFlex – система, в которой особым образом сочетаются физические упражнения на
        укрепление и растяжку мышц, и дыхательная гимнастика. Такое сочетание приводит к 
        яду положительных эффектов, которые практически невозможно достичь с помощью других
        направлений фитнеса. Одна из самых интересных особенностей данной системы заключается
        в том, что это эффективный фитнес дома.
    </h3>

    <h3 className={S.info_3}>
        Весь смысл бодифлекса сводится к правильному дыханию, благодаря которому упражнения
        на растяжку и укрепление мышц приобретают свою эффективность. При выдыхании воздуха
        и задержке дыхания организм на короткое время испытывает кислородное голодание, в крови
        накапливается углекислый газ, что приводит к запуску некоторых физиологических процессов,
        типичных для ситуации «бей или беги». То есть, организм приходит в состояние повышенной
        готовности и способен выполнять быстрые и энергичные действия.
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

export default Bodyflex_prev;