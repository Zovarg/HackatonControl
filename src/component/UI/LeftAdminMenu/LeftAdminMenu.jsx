import React, {useState} from 'react';
import ClickAwayListener from "react-click-away-listener";
import cl from './LeftAdminMenu.module.css'
import AvatarRole from "../../../images/AvatarRole.svg";
import profileModal from "../../../images/profileModal.svg";
import settingsModal from "../../../images/settingsModal.svg";
import chatModal from "../../../images/chatModal.svg";
import supportModal from "../../../images/supportModal.svg";
import logoutModal from "../../../images/logoutModal.svg";
import ChartPieSlice from "../../../images/ChartPieSlice.svg";
import Kanban from "../../../images/Kanban.svg";
import FolderNotch from "../../../images/FolderNotch.svg";
import BookOpen from "../../../images/BookOpen.svg";
import UsersThree from "../../../images/UsersThree.svg";
import Chats from "../../../images/Chats.svg";
import GearSix from "../../../images/GearSix.svg";
import IdentificationCard from "../../../images/IdentificationCard.svg";
import LogoAdmin from "../../../images/LogoAdmin.svg";
import useAuth from "../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
const LeftAdminMenu = ({page, setPage}) => {
    const auth = useAuth();
    const nav = useNavigate();
    const [menu, setMenu]=useState([
        {
            mainLinkId:1,
            mainLinkName:'Сводка',
            mainLinkIcon:ChartPieSlice,
            mainLinkVisible:false,
            additionalLinks:[{additionalLinkId:1, additionalLinkName:'Аналитика'},]
        },
        {
            mainLinkId:2,
            mainLinkName:'Задачи',
            mainLinkIcon:Kanban,
            mainLinkVisible:false,
            additionalLinks:[
                {additionalLinkId:5, additionalLinkName:'Все заявки'},
                {additionalLinkId:6, additionalLinkName:'Канбан'},
                {additionalLinkId:7, additionalLinkName:'БЦ'},
                {additionalLinkId:8, additionalLinkName:'ЖК'},
                {additionalLinkId:8, additionalLinkName:'ТЦ'},
                {additionalLinkId:8, additionalLinkName:'Отели'},
            ]
        },
        {
            mainLinkId:3,
            mainLinkName:'Отделы',
            mainLinkIcon:FolderNotch,
            mainLinkVisible:false,
            additionalLinks:[]
        },
        {
            mainLinkId:4,
            mainLinkName:'Отчеты',
            mainLinkIcon:BookOpen,
            mainLinkVisible:false,
            additionalLinks:[]
        }
    ])
    const [sections, setSections]=useState([
        {
            mainLinkId:1,
            mainLinkName:'Аккаунт',
            mainLinkIcon:IdentificationCard,
            mainLinkVisible:false,
            additionalLinks:[
                {additionalLinkId:1, additionalLinkName:'Профиль'},
                {additionalLinkId:2, additionalLinkName:'Доступ'},
                {additionalLinkId:3, additionalLinkName:'Безопасность'},
                {additionalLinkId:4, additionalLinkName:'Документы'},
            ]
        },
        {
            mainLinkId:2,
            mainLinkName:'Сотрудники',
            mainLinkIcon:UsersThree,
            mainLinkVisible:false,
            additionalLinks:[]
        },
        {
            mainLinkId:3,
            mainLinkName:'Чаты',
            mainLinkIcon:Chats,
            mainLinkVisible:false,
            additionalLinks:[]
        },
        {
            mainLinkId:4,
            mainLinkName:'Система',
            mainLinkIcon:GearSix,
            mainLinkVisible:false,
            additionalLinks:[]
        }
    ])
    const [visibleModalAvatar, setVisibleModalAvatar]=useState(false)
    const closeModalAvatar = () => {
        setVisibleModalAvatar(false)
    };
    function onLogOut(e){
        e.preventDefault();
        auth.logOut();
        nav("/");
    };
    function changeMenu(prop, value, event) {
        setMenu(menu.map(obj => {
            if (obj.mainLinkId === prop.mainLinkId) {
                return {...obj, [event]: value};
            } else {
                return obj;
            }
        }));
    }
    function changeSections(prop, value, event) {
        setSections(sections.map(obj => {
            if (obj.mainLinkId === prop.mainLinkId) {
                return {...obj, [event]: value};
            } else {
                return obj;
            }
        }));
    }
    return (
        <div>
            {
                visibleModalAvatar?
                    <ClickAwayListener onClickAway={closeModalAvatar}>
                        <div className={cl.modalOptions}>
                            <div className={cl.modalOptions__header}>
                                <div className={cl.modalOptions__header_img}>
                                    <img src={AvatarRole} alt="Аватар"/>
                                </div>
                                <div className={cl.modalOptions__header_descr}>
                                    <div className={cl.modalOptionsHeaderName}>Admin</div>
                                    <div className={cl.modalOptionsHeaderEmail}>{auth.user.user_id}</div>
                                </div>
                            </div>
                            <div className={cl.modalOptions__list}>
                                <div className={cl.modalOptions__list_el}>
                                    <div className={cl.modalOptionsListDescr}>
                                        <div className={cl.modalOptionsListDescr__icon}>
                                            <img src={profileModal}/>
                                        </div>
                                        <div className={cl.modalOptionsListDescr__text}>Профиль</div>
                                    </div>
                                    <div className={cl.modalOptionsListArrow}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.14645 5.14645C6.34171 4.95118 6.65829 4.95118 6.85355 5.14645L9.35355 7.64645C9.54882 7.84171 9.54882 8.15829 9.35355 8.35355L6.85355 10.8536C6.65829 11.0488 6.34171 11.0488 6.14645 10.8536C5.95118 10.6583 5.95118 10.3417 6.14645 10.1464L8.29289 8L6.14645 5.85355C5.95118 5.65829 5.95118 5.34171 6.14645 5.14645Z" fill="black" fillOpacity="0.2"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cl.modalOptions__list_el}>
                                    <div className={cl.modalOptionsListDescr}>
                                        <div className={cl.modalOptionsListDescr__icon}>
                                            <img src={settingsModal}/>
                                        </div>
                                        <div className={cl.modalOptionsListDescr__text}>Настройки</div>
                                    </div>
                                    <div className={cl.modalOptionsListArrow}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.14645 5.14645C6.34171 4.95118 6.65829 4.95118 6.85355 5.14645L9.35355 7.64645C9.54882 7.84171 9.54882 8.15829 9.35355 8.35355L6.85355 10.8536C6.65829 11.0488 6.34171 11.0488 6.14645 10.8536C5.95118 10.6583 5.95118 10.3417 6.14645 10.1464L8.29289 8L6.14645 5.85355C5.95118 5.65829 5.95118 5.34171 6.14645 5.14645Z" fill="black" fillOpacity="0.2"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cl.modalOptions__list_el}>
                                    <div className={cl.modalOptionsListDescr}>
                                        <div className={cl.modalOptionsListDescr__icon}>
                                            <img src={chatModal}/>
                                        </div>
                                        <div className={cl.modalOptionsListDescr__text}>Сообщения</div>
                                    </div>
                                    <div className={cl.modalOptionsListArrow}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.14645 5.14645C6.34171 4.95118 6.65829 4.95118 6.85355 5.14645L9.35355 7.64645C9.54882 7.84171 9.54882 8.15829 9.35355 8.35355L6.85355 10.8536C6.65829 11.0488 6.34171 11.0488 6.14645 10.8536C5.95118 10.6583 5.95118 10.3417 6.14645 10.1464L8.29289 8L6.14645 5.85355C5.95118 5.65829 5.95118 5.34171 6.14645 5.14645Z" fill="black" fillOpacity="0.2"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cl.modalOptions__list_el}>
                                    <div className={cl.modalOptionsListDescr}>
                                        <div className={cl.modalOptionsListDescr__icon}>
                                            <img src={supportModal}/>
                                        </div>
                                        <div className={cl.modalOptionsListDescr__text}>Поддержка</div>
                                    </div>
                                    <div className={cl.modalOptionsListArrow}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.14645 5.14645C6.34171 4.95118 6.65829 4.95118 6.85355 5.14645L9.35355 7.64645C9.54882 7.84171 9.54882 8.15829 9.35355 8.35355L6.85355 10.8536C6.65829 11.0488 6.34171 11.0488 6.14645 10.8536C5.95118 10.6583 5.95118 10.3417 6.14645 10.1464L8.29289 8L6.14645 5.85355C5.95118 5.65829 5.95118 5.34171 6.14645 5.14645Z" fill="black" fillOpacity="0.2"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={cl.modalOptions__logout} onClick={onLogOut}>
                                <div className={cl.modalOptions__logout_icon}>
                                    <img src={logoutModal}/>
                                </div>
                                <div className={cl.modalOptions__logout_text}>Выйти</div>
                            </div>
                        </div>
                    </ClickAwayListener>
                    :
                    <></>
            }

            <div className={cl.leftMenu}>
                <div className={cl.leftMenu__main}>
                    <div className={cl.leftMenu__main_role} onClick={()=>{setVisibleModalAvatar(!visibleModalAvatar)}}>
                        <div className={cl.leftMenuRole_data}>
                            <div className={cl.leftMenuRole_data__avatar}>
                                <img src={AvatarRole} alt="Аватар"/>
                            </div>
                            <div className={cl.leftMenuRole_data__name}>Админ</div>
                        </div>
                        <div className={cl.leftMenuRole_icon}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5669 7.68306C13.811 7.92714 13.811 8.32286 13.5669 8.56694L10.4419 11.6919C10.1979 11.936 9.80214 11.936 9.55806 11.6919L6.43306 8.56694C6.18898 8.32286 6.18898 7.92714 6.43306 7.68306C6.67714 7.43898 7.07286 7.43898 7.31694 7.68306L10 10.3661L12.6831 7.68306C12.9271 7.43898 13.3229 7.43898 13.5669 7.68306Z" fill="black" fillOpacity="0.2"/>
                            </svg>
                        </div>
                    </div>
                    <div className={cl.leftMenu__blocks}>
                        <div className={cl.leftMenu__block_el}>
                            <div className={cl.titleBlockMenu}>Панель управления</div>
                            <div className={cl.titleBlockLinks}>
                                {
                                    menu.map(el=>
                                        <div className={cl.blockMainLinkWrapper} key={el.mainLinkId}>
                                            <div className={cl.blockMainLink} onClick={()=>{changeMenu(el,!el.mainLinkVisible, 'mainLinkVisible')}}>
                                                {el.mainLinkVisible?
                                                    <div className={cl.blockMainShowIcon} >
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.43306 11.6842C6.18898 11.4582 6.18898 11.0918 6.43306 10.8657L9.55806 7.97206C9.80214 7.74604 10.1979 7.74604 10.4419 7.97206L13.5669 10.8657C13.811 11.0918 13.811 11.4582 13.5669 11.6842C13.3229 11.9102 12.9271 11.9102 12.6831 11.6842L10 9.19974L7.31694 11.6842C7.07286 11.9102 6.67714 11.9102 6.43306 11.6842Z" fill="#1C1C1C"/>
                                                        </svg>
                                                    </div>
                                                    :
                                                    <div className={cl.blockMainHideIcon} >
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.68306 6.43306C7.92714 6.18898 8.32286 6.18898 8.56694 6.43306L11.6919 9.55806C11.936 9.80214 11.936 10.1979 11.6919 10.4419L8.56694 13.5669C8.32286 13.811 7.92714 13.811 7.68306 13.5669C7.43898 13.3229 7.43898 12.9271 7.68306 12.6831L10.3661 10L7.68306 7.31694C7.43898 7.07286 7.43898 6.67714 7.68306 6.43306Z" fill="black" fillOpacity="0.2"/>
                                                        </svg>
                                                    </div>
                                                }
                                                <div className={cl.blockMainInfo}>
                                                    <div className={cl.blockMainInfo__img}><img src={el.mainLinkIcon}/></div>
                                                    <div className={cl.blockMainInfo__descr}>{el.mainLinkName}</div>
                                                </div>
                                            </div>
                                            {
                                                el.mainLinkVisible?
                                                    <div className={cl.blockAdditionLinks}>
                                                        {el.additionalLinks.map(ob=>
                                                            <div key={ob.additionalLinkName}  className={page===ob.additionalLinkName?cl.blockAdditionLink__active:cl.blockAdditionLink} onClick={()=>{setPage(ob.additionalLinkName)}}>{ob.additionalLinkName}</div>
                                                        )}
                                                    </div>
                                                    :
                                                    <>
                                                    </>

                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className={cl.leftMenu__block_el}>
                            <div className={cl.titleBlockMenu}>Разделы</div>
                            <div className={cl.titleBlockLinks}>
                                {
                                    sections.map(el=>
                                        <div className={cl.blockMainLinkWrapper} key={el.mainLinkId}>
                                            <div className={cl.blockMainLink} onClick={()=>{changeSections(el,!el.mainLinkVisible, 'mainLinkVisible')}}>
                                                {el.mainLinkVisible?
                                                    <div className={cl.blockMainShowIcon} >
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.43306 11.6842C6.18898 11.4582 6.18898 11.0918 6.43306 10.8657L9.55806 7.97206C9.80214 7.74604 10.1979 7.74604 10.4419 7.97206L13.5669 10.8657C13.811 11.0918 13.811 11.4582 13.5669 11.6842C13.3229 11.9102 12.9271 11.9102 12.6831 11.6842L10 9.19974L7.31694 11.6842C7.07286 11.9102 6.67714 11.9102 6.43306 11.6842Z" fill="#1C1C1C"/>
                                                        </svg>
                                                    </div>
                                                    :
                                                    <div className={cl.blockMainHideIcon} >
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.68306 6.43306C7.92714 6.18898 8.32286 6.18898 8.56694 6.43306L11.6919 9.55806C11.936 9.80214 11.936 10.1979 11.6919 10.4419L8.56694 13.5669C8.32286 13.811 7.92714 13.811 7.68306 13.5669C7.43898 13.3229 7.43898 12.9271 7.68306 12.6831L10.3661 10L7.68306 7.31694C7.43898 7.07286 7.43898 6.67714 7.68306 6.43306Z" fill="black" fillOpacity="0.2"/>
                                                        </svg>
                                                    </div>
                                                }
                                                <div className={cl.blockMainInfo}>
                                                    <div className={cl.blockMainInfo__img}><img src={el.mainLinkIcon}/></div>
                                                    <div className={cl.blockMainInfo__descr}>{el.mainLinkName}</div>
                                                </div>
                                            </div>
                                            {
                                                el.mainLinkVisible?
                                                    <div className={cl.blockAdditionLinks}>
                                                        {el.additionalLinks.map(ob=>
                                                            <div className={cl.blockAdditionLink} onClick={()=>{setPage(ob.additionalLinkName)}}>{ob.additionalLinkName}</div>
                                                        )}
                                                    </div>
                                                    :
                                                    <>
                                                    </>

                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.leftMenu__logo}>
                    <img src={LogoAdmin}/>
                </div>
            </div>
        </div>
    );
};

export default LeftAdminMenu;