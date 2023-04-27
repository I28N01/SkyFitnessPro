import React from 'react';
import S from './Workout_preview.module.css'
import Logo from '../../img/Logo_.png'
import LogoText from '../../img/SkyFitnessPro_black.png'
import Card from '../../img/yoga_card.png'
import Item_pic from '../../img/item_svg.png'
import { NavLink } from 'react-router-dom';


const Stretching_prev = () => {
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
          <div className={S.info_text}>Хотите подтянуть тело, смоделировать мышечный корсет</div>
      </div>
      <div className={S.info_item}>
      <div className={S.info_cirlce}>
            <p className={S.info_number}>2</p>
          </div>
          <div className={S.info_text}>Улучшить осанку и координацию</div>
      </div><div className={S.info_item}>
          <div className={S.info_cirlce}>
            <p className={S.info_number}>3</p>
          </div>
          <div className={S.info_text}>Улучшить кровообращение и обмен веществ</div>
      </div>
      </div>
     
    </div>
    <div>
      <h2 className={S.list_caption} >Направления:</h2>
      <div className={S.lists}>
      <ul className={S.list} >
          <li className={S.list_item}>статический</li>
          <li className={S.list_item}>динамический</li>
          {/* <li className={S.list_item}>Йогатерапия</li> */}
        </ul>
        <ul className={S.list} >
          <li className={S.list_item}>пассивный</li>
          <li className={S.list_item}>активный</li>
          {/* <li className={S.list_item}>Аштанга-йога</li> */}
        </ul>
      </div>
    
    </div>

    <h3 className={S.info}>
    Стретчинг (или stretching) – это система упражнений, целью которых является
    разогрев и растяжка мышц и связок. При этом стретчинг – не просто комплекс
     упражнений для разминки перед тренировкой, а самостоятельное направление фитнеса,
     которое может использоваться как в комплексе с другими направлениями, так и самостоятельно.
    </h3>

    <h3 className={S.goals_list}>
    Стретчинг в домашних условиях может использоваться для многих целей:
    </h3>
      <ul className={S.goals} >
        <li className={S.list_item}>Выступает в качестве гимнастики в период восстановления после травм;</li>
        <li className={S.list_item}>Входит в состав программы для похудения;</li>
        <li className={S.list_item}>Помогает развить гибкость и пластичность, при правильном подходе вы сядете на шпагат через несколько недель;</li>
        <li className={S.list_item}>Это эффективный способ расслабиться после трудного дня.</li>
      </ul>


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

export default Stretching_prev;