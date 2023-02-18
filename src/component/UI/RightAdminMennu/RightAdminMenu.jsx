import React, {useState} from 'react';
import cl from "./RightAdminMenu.module.css";
import appealMenu from "../../../images/rightMenuAppeal.svg";
import RegisterMenu from "../../../images/rightMenuRegistration.svg";
import queryMenu from "../../../images/rightMenuQuery.svg";
import AvatarRightMenu1 from "../../../images/AvatarRightMenu1.svg";
import AvatarRightMenu2 from "../../../images/AvatarRightMenu2.svg";
import AvatarRightMenu3 from "../../../images/AvatarRightMenu3.svg";
import AvatarRightMenu4 from "../../../images/AvatarRightMenu4.svg";
import AvatarRightMenu5 from "../../../images/AvatarRightMenu5.svg";
import AvatarRightMenu6 from "../../../images/AvatarRightMenu6.svg";

const RightAdminMenu = () => {
    const [tasks,setTasks]=useState([
        {title:'Уведомление о последних происшедших событиях в системе', time:'5м назад', img:AvatarRightMenu1},
        {title:'Уведомление о последних происшедших событиях в системе', time:'12:32', img:AvatarRightMenu2},
        {title:'Уведомление о последних происшедших событиях в системе', time:'Вчера 15:54', img:AvatarRightMenu3},
        {title:'Уведомление о последних происшедших событиях в системе', time:'Позавчера 13:31', img:AvatarRightMenu4},
        {title:'Уведомление о последних происшедших событиях в системе', time:'Воскресенье 11:10', img:AvatarRightMenu5},
    ])
    const [departments,setDepartments]=useState([
        {title:'Оливия Борисова', img:AvatarRightMenu1},
        {title:'Наталья Шелкова', img:AvatarRightMenu2},
        {title:'Андрей Макаров', img:AvatarRightMenu3},
        {title:'Катерина Степанова', img:AvatarRightMenu4},
        {title:'Наталья Куликова', img:AvatarRightMenu5},
        {title:'Влада Черченко', img:AvatarRightMenu6},
    ])
    return (
        <div className={cl.rightMenu}>
            <div className={cl.rightMenu__notifications}>
                <div className={cl.rightMenu__title}>Уведомления</div>
                <div className={cl.rightMenu__body}>
                    <div className={cl.rightMenu__el}>
                        <div className={cl.rightMenu__el_img}>
                            <img src={appealMenu}/>
                        </div>
                        <div className={cl.rightMenu__el_description}>
                            <div className={cl.rightMenu__el_naming}>Обращение в поддержку</div>
                            <div className={cl.rightMenu__el_time}>5м назад</div>
                        </div>
                    </div>
                    <div className={cl.rightMenu__el}>
                        <div className={cl.rightMenu__el_img}>
                            <img src={RegisterMenu}/>
                        </div>
                        <div className={cl.rightMenu__el_description}>
                            <div className={cl.rightMenu__el_naming}>Регистрация нового сотрудника</div>
                            <div className={cl.rightMenu__el_time}>11:49</div>
                        </div>
                    </div>
                    <div className={cl.rightMenu__el}>
                        <div className={cl.rightMenu__el_img}>
                            <img src={appealMenu}/>
                        </div>
                        <div className={cl.rightMenu__el_description}>
                            <div className={cl.rightMenu__el_naming}>Обращение в поддержку</div>
                            <div className={cl.rightMenu__el_time}>5:15</div>
                        </div>
                    </div>
                    <div className={cl.rightMenu__el}>
                        <div className={cl.rightMenu__el_img}>
                            <img src={queryMenu}/>
                        </div>
                        <div className={cl.rightMenu__el_description}>
                            <div className={cl.rightMenu__el_naming}>Запрос на выдачу прав доступа</div>
                            <div className={cl.rightMenu__el_time}>Позавчера 14:27</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.rightMenu__endedTasks}>
                <div className={cl.rightMenu__title}>Завершенные задачи</div>
                <div className={cl.rightMenu__body}>
                    {
                        tasks.map(el=>
                            <div className={cl.rightMenu__el} key={el.time}>
                                <div className={cl.rightMenu__el_img}>
                                    <img src={`${el.img}`}/>
                                </div>
                                <div className={cl.rightMenu__el_description}>
                                    <div className={cl.rightMenu__el_naming}>{el.title}</div>
                                    <div className={cl.rightMenu__el_time}>{el.time}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={cl.rightMenu__departments}>
                <div className={cl.rightMenu__title}>Отделы</div>
                <div className={cl.rightMenu__body}>
                    {
                        departments.map(el=>
                            <div className={cl.rightMenu__el} key={el.title}>
                                <div className={cl.rightMenu__el_img}>
                                    <img src={`${el.img}`}/>
                                </div>
                                <div className={cl.rightMenu__el_description}>
                                    <div className={cl.rightMenu__el_naming}>{el.title}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default RightAdminMenu;