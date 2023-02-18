import React, {useEffect, useState} from 'react';
import AvatarKanban from "../../../images/AvatarKanban.svg";
import ScrollContainer from 'react-indiana-drag-scroll'
import cl from './Kanban.module.css'
import {useFetching} from "../../../hooks/useFetching";
import api from "../../../services/api";

const Kanban = () => {
    const [titles, setTitles]=useState([
        {name:'Все заявки'},
        {name:'Канбан'},
        {name:'Бизнес-центры'},
        {name:'ЖК'},
        {name:'Торговые центры'},
        {name:'Отели'}
    ])
    const [colors, setColors]=useState(['#B1E3FF', '#FFE999', '#C6C7F8','#A1E3CB','gray'])
    const [statusPages, setStatusPages]=useState([])
    const [taskStatuses, setTaskStatuses]=useState([])

    const [fetchTasks, isTaskLoading, taskError] = useFetching(async () => {
        const { data: listTasks } = await api.auth.getKanban();
        setStatusPages(listTasks)
        console.log(statusPages)
    })
    const [fetchTasksStatuses, isTaskStatusesLoading, taskStatusesError] = useFetching(async () => {
        const { data: listTasks } = await api.auth.getTaskStatuses();
        listTasks.map((el,index)=>{
            el.color=colors[index]
        })
        setTaskStatuses(listTasks)
        fetchTasks()
        console.log(taskStatuses)
    })
    useEffect(() => {
        fetchTasksStatuses();
    }, []);
    return (
        <div className={cl.container}>
            <div className={cl.headerWrapper}>
                <div className={cl.headerParts}>
                    {
                        titles.map(el=>
                            <div className={el.name==='Канбан'?cl.headerPartActive:cl.headerPart}  key={el.name}>{el.name}</div>
                        )
                    }
                </div>
                <div className={cl.headerOptions}>
                    <div className={cl.addNewRequest}>
                        <div className={cl.addNewRequest__icon}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.625 4.875C10.625 4.52982 10.3452 4.25 10 4.25C9.65482 4.25 9.375 4.52982 9.375 4.875V9.875H4.375C4.02982 9.875 3.75 10.1548 3.75 10.5C3.75 10.8452 4.02982 11.125 4.375 11.125H9.375V16.125C9.375 16.4702 9.65482 16.75 10 16.75C10.3452 16.75 10.625 16.4702 10.625 16.125V11.125H15.625C15.9702 11.125 16.25 10.8452 16.25 10.5C16.25 10.1548 15.9702 9.875 15.625 9.875H10.625V4.875Z" fill="black" fillOpacity="0.4"/>
                            </svg>
                        </div>
                        <div className={cl.addNewRequest__text}>Новая заявка</div>
                    </div>
                    <div className={cl.newClient}>Новый клиент</div>
                    <div className={cl.headerDots}>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 13.25C9.69036 13.25 10.25 13.8096 10.25 14.5C10.25 15.1904 9.69036 15.75 9 15.75C8.30964 15.75 7.75 15.1904 7.75 14.5C7.75 13.8096 8.30964 13.25 9 13.25Z" fill="black" fillOpacity="0.4"/>
                            <path d="M14 13.25C14.6904 13.25 15.25 13.8096 15.25 14.5C15.25 15.1904 14.6904 15.75 14 15.75C13.3096 15.75 12.75 15.1904 12.75 14.5C12.75 13.8096 13.3096 13.25 14 13.25Z" fill="black" fillOpacity="0.4"/>
                            <path d="M20.25 14.5C20.25 13.8096 19.6904 13.25 19 13.25C18.3096 13.25 17.75 13.8096 17.75 14.5C17.75 15.1904 18.3096 15.75 19 15.75C19.6904 15.75 20.25 15.1904 20.25 14.5Z" fill="black" fillOpacity="0.4"/>
                        </svg>
                    </div>
                </div>
            </div>
            <ScrollContainer className={cl.tasks_wrapper}>
                {taskStatuses.map(el=>
                    <div key={el.name} className={cl.taskFunnel}>
                        <div className={cl.taskFunnel__title}>
                            <div className={cl.taskFunnel__title_name}>{el.name} <span>29</span></div>
                        </div>
                        <div className={cl.taskFunnel__line} style={{background:el.color}}></div>
                        <div className={cl.taskFunnel__list}>
                            {statusPages.map(obj=>
                                obj.status===el.name?
                                <div className={cl.taskFunnel__list_el}>
                                    <div className={cl.taskFunnelEl__name}>{obj.waiting_for}</div>
                                    <div className={cl.taskFunnelEl__date}>Заявка от {obj.created.slice(0,10)}</div>
                                    <div className={cl.taskFunnelEl__description}>{obj.query}</div>
                                    <div className={cl.taskFunnelEl__address}>Селезнева, д. 7, п. 5, эт. 4., кв. 195.<br/>Комментарии: новый счетчик приобретен, требуется лишь замена</div>
                                    <div className={cl.taskFunnelEl__executor}>
                                        <div className={cl.taskFunnelEl__executor_left}>
                                            <div className={cl.executorPhoto}>
                                                <img src={AvatarKanban}/>
                                            </div>
                                            <div className={cl.executorName}>{obj.executor.firstname}</div>
                                        </div>
                                        <div className={cl.taskFunnelEl__executor_right}>
                                            <div className={cl.counterFiles}>
                                                <div>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.82982 5.73281C9.89962 5.80452 9.93828 5.90089 9.9374 6.00096C9.93653 6.10103 9.89618 6.1967 9.82513 6.26718L5.98138 10.1062C5.48908 10.5986 4.82136 10.8751 4.12513 10.8751C3.4289 10.8751 2.76119 10.5986 2.26888 10.1062C1.77658 9.61394 1.5 8.94622 1.5 8.24999C1.5 7.55376 1.77658 6.88605 2.26888 6.39374L6.92357 1.67812C7.09579 1.49653 7.30262 1.35126 7.53186 1.25086C7.76111 1.15047 8.00814 1.09698 8.25838 1.09356C8.50862 1.09014 8.75702 1.13684 8.98893 1.23093C9.22083 1.32502 9.43156 1.46458 9.60868 1.64139C9.7858 1.8182 9.92573 2.02867 10.0202 2.26041C10.1147 2.49215 10.1619 2.74047 10.1589 2.99072C10.1559 3.24096 10.1029 3.48808 10.0029 3.71751C9.90288 3.94693 9.75798 4.15402 9.5767 4.32656L4.92201 9.04218C4.81796 9.14783 4.6939 9.23167 4.55708 9.28882C4.42026 9.34596 4.27341 9.37526 4.12513 9.37499C3.90223 9.37554 3.68418 9.30986 3.49867 9.18628C3.31316 9.0627 3.16854 8.8868 3.08316 8.68089C2.99778 8.47498 2.9755 8.24835 3.01914 8.02976C3.06277 7.81117 3.17037 7.61046 3.32826 7.45312L7.23295 3.48749C7.26673 3.44959 7.30787 3.41895 7.35385 3.39742C7.39984 3.37589 7.44971 3.36393 7.50046 3.36225C7.55121 3.36057 7.60176 3.36921 7.64907 3.38766C7.69638 3.4061 7.73945 3.43396 7.77566 3.46954C7.81188 3.50513 7.8405 3.54769 7.85978 3.59467C7.87905 3.64164 7.88859 3.69204 7.88781 3.74281C7.88703 3.79357 7.87595 3.84365 7.85524 3.89001C7.83453 3.93637 7.80462 3.97804 7.76732 4.01249L3.86263 7.98281C3.82709 8.01765 3.79883 8.05922 3.77952 8.10509C3.76021 8.15096 3.75022 8.20022 3.75013 8.24999C3.75151 8.32377 3.77435 8.39554 3.81587 8.45654C3.85739 8.51755 3.91578 8.56513 3.9839 8.59347C4.05203 8.62182 4.12694 8.6297 4.19947 8.61615C4.27201 8.6026 4.33902 8.56821 4.39232 8.51718L9.04232 3.79687C9.14797 3.69282 9.23181 3.56876 9.28896 3.43194C9.3461 3.29512 9.3754 3.14827 9.37513 2.99999C9.37568 2.77709 9.31 2.55904 9.18642 2.37353C9.06284 2.18802 8.88694 2.04339 8.68103 1.95802C8.47512 1.87264 8.24849 1.85036 8.0299 1.894C7.81131 1.93763 7.6106 2.04523 7.45326 2.20312L2.80326 6.92343C2.62167 7.09565 2.4764 7.30248 2.376 7.53172C2.27561 7.76097 2.22212 8.008 2.2187 8.25824C2.21528 8.50848 2.26198 8.75688 2.35607 8.98879C2.45016 9.22069 2.58972 9.43142 2.76653 9.60854C2.94334 9.78566 3.15381 9.92559 3.38555 10.0201C3.61729 10.1146 3.86561 10.1617 4.11586 10.1588C4.3661 10.1558 4.61322 10.1027 4.84265 10.0027C5.07207 9.90274 5.27916 9.75784 5.4517 9.57656L9.29545 5.73281C9.36654 5.66239 9.46257 5.62288 9.56263 5.62288C9.6627 5.62288 9.75872 5.66239 9.82982 5.73281Z" fill="black" fillOpacity="0.4"/>
                                                    </svg>
                                                </div>
                                                <div>1</div>
                                            </div>
                                            <div className={cl.counterDialogs}>
                                                <div>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.35508 11.017L3.84496 9.76711L3.89365 9.75H10.125C10.125 9.75 10.4357 9.75 10.6553 9.53033C10.6553 9.53033 10.875 9.31066 10.875 9V3C10.875 3 10.875 2.68934 10.6553 2.46967C10.6553 2.46967 10.4357 2.25 10.125 2.25H1.875C1.875 2.25 1.56434 2.25 1.34467 2.46967C1.34467 2.46967 1.125 2.68934 1.125 3L1.12501 10.4467C1.12501 10.4467 1.12673 10.6638 1.24416 10.8464C1.24416 10.8464 1.36158 11.029 1.55839 11.1207C1.55839 11.1207 1.75521 11.2123 1.97054 11.1847C1.97054 11.1847 2.18587 11.157 2.35508 11.017ZM3.70538 9.0212C3.74532 9.00717 3.78735 9 3.82969 9H10.125V3H1.875L1.87498 10.4408L3.41524 9.14864C3.44982 9.11963 3.48936 9.0971 3.53194 9.08214L3.70538 9.0212Z" fill="black" fillOpacity="0.4"/>
                                                        <path d="M4.5 5.625H7.5C7.70711 5.625 7.875 5.45711 7.875 5.25C7.875 5.04289 7.70711 4.875 7.5 4.875H4.5C4.29289 4.875 4.125 5.04289 4.125 5.25C4.125 5.45711 4.29289 5.625 4.5 5.625Z" fill="black" fillOpacity="0.4"/>
                                                        <path d="M4.5 7.125H7.5C7.70711 7.125 7.875 6.95711 7.875 6.75C7.875 6.54289 7.70711 6.375 7.5 6.375H4.5C4.29289 6.375 4.125 6.54289 4.125 6.75C4.125 6.95711 4.29289 7.125 4.5 7.125Z" fill="black" fillOpacity="0.4"/>
                                                    </svg>
                                                </div>
                                                <div>2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    <></>
                            )}
                        </div>
                    </div>
                )}
            </ScrollContainer>
        </div>
    );
};

export default Kanban;