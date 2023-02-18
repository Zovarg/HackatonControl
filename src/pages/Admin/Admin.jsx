import React, {useState} from 'react'
import cl from './admin.module.css'
import {PieChart, Pie, BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LeftAdminMenu from "../../component/UI/LeftAdminMenu/LeftAdminMenu";
import RightAdminMenu from "../../component/UI/RightAdminMennu/RightAdminMenu";
import TopAdminMenu from "../../component/UI/topAdminMenu/TopAdminMenu";
export const Admin = () => {
    const [blocks,setBlocks]=useState([
        {title:'Визиты', value:'7К', percent:11.01},
        {title:'Задачи', value:'3К', percent:9.15},
        {title:'Новые пользователи', value:'156', percent:-0.56},
        {title:'Активные пользователи', value:'2К', percent:-1.48},
    ])
    const MAX = 100;
    const [traffic,setTraffic]=useState([
        {title:'БЦ Алмаз', value:100},
        {title:'БЦ Солнце', value:40},
        {title:'БЦ Стрела', value:50},
        {title:'БЦ Интер', value:20},
        {title:'БЦ NewW', value:55},
        {title:'БЦ КК', value:70},
        {title:'БЦ DevGT', value:15},
    ])
    const getBackgroundSize = (id) => {
        return {
            backgroundSize: `${(traffic[id].value * 100) / MAX}% 100%`,
        };
    };
    const data = [
        {
            name: 'Пн',
            'Текущая неделя': 4000,
            'Предыдущая неделя': 2400,
        },
        {
            name: 'Вт',
            'Текущая неделя': 3000,
            'Предыдущая неделя': 1398,
        },
        {
            name: 'Ср',
            'Текущая неделя': 2000,
            'Предыдущая неделя': 9800,
        },
        {
            name: 'Чт',
            'Текущая неделя': 2780,
            'Предыдущая неделя': 3908,
        },
        {
            name: 'Пт',
            'Текущая неделя': 1890,
            'Предыдущая неделя': 4800,
        },
        {
            name: 'Сб',
            'Текущая неделя': 2390,
            'Предыдущая неделя': 3800,
        },
        {
            name: 'Вс',
            'Текущая неделя': 3490,
            'Предыдущая неделя': 4300,
        },
    ];
    const colorsBar = ['#BAEDBD', '#C6C7F8', '#1C1C1C', '#B1E3FF', '#2684FF', '#A1E3CB'];
    const dataBar = [
        {
            name: 'Алмаз',
            'Задачи': 4000,
        },
        {
            name: 'Солнце',
            'Задачи': 3000,
        },
        {
            name: 'Стрела',
            'Задачи': 2000,
        },
        {
            name: 'Интер',
            'Задачи': 2780,
        },
        {
            name: 'NewVV',
            'Задачи': 1890,
        },
        {
            name: 'DevGT',
            'Задачи': 2390,
        }
    ];
    const dataPie = [
        { name: 'Group A', value: 38.6 },
        { name: 'Group B', value: 22.5 },
        { name: 'Group C', value: 30.8 },
        { name: 'Group D', value: 8.1 },
    ];
    const colorsPie = ['#855CBF', '#C6C7F8', '#BAEDBD', '#2684FF'];

    return (
        <div>
            <LeftAdminMenu/>
            <TopAdminMenu/>
            <div className={cl.container}>
                <div className={cl.title_stats}>
                    <div className={cl.title_stats__body}>Бизнес-центры</div>
                    <div className={cl.title_stats__svg}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5669 7.68306C13.811 7.92714 13.811 8.32286 13.5669 8.56694L10.4419 11.6919C10.1979 11.936 9.80214 11.936 9.55806 11.6919L6.43306 8.56694C6.18898 8.32286 6.18898 7.92714 6.43306 7.68306C6.67714 7.43898 7.07286 7.43898 7.31694 7.68306L10 10.3661L12.6831 7.68306C12.9271 7.43898 13.3229 7.43898 13.5669 7.68306Z" fill="black" fillOpacity="0.2"/>
                        </svg>
                    </div>
                </div>
                <div className={cl.blocks_stats}>
                    {blocks.map((el,index)=>
                        <div className={cl.block_stat} style={index%2?{background:'#E5ECF6'}:{}} key={el.title}>
                            <div className={cl.block_stat__naming}>{el.title}</div>
                            <div className={cl.block_stat__counter}>
                                <div className={cl.block_stat__counter_number}>{el.value}</div>
                                {(el.percent>0)?
                                    <div className={cl.block_stat__counter_percent}>
                                        +{el.percent}%
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C"/>
                                        </svg>
                                    </div>
                                    : (
                                        (el.percent<0)?
                                            <div className={cl.block_stat__counter_percent}>
                                                {el.percent}%
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.3463 3.63931C14.5455 3.83054 14.5519 4.14706 14.3607 4.34627L11.0007 7.84627C10.9064 7.94448 10.7761 8 10.64 8C10.5039 8 10.3736 7.94448 10.2793 7.84627L8.24 5.72199L5.82335 8.23933L7.54513 9.89223L2 11.5L3.38019 5.8939L5.10197 7.5468L7.87931 4.65373C7.97359 4.55552 8.10385 4.5 8.24 4.5C8.37615 4.5 8.50641 4.55552 8.60069 4.65373L10.64 6.77801L13.6393 3.65373C13.8305 3.45453 14.1471 3.44807 14.3463 3.63931Z" fill="#1C1C1C"/>
                                                </svg>
                                            </div>
                                            :
                                            <div className={cl.block_stat__counter_percent}>
                                                {el.percent}%
                                            </div>
                                    )

                                }
                            </div>
                        </div>
                    )}
                </div>
                <div className={cl.line_range_wrapper}>
                    <div className={cl.line_chart_wrapper}>
                        <div className={cl.line_chart_title}>
                            <div className={cl.lineTitle__fields}>
                                <div className={[cl.lineTitle__fields_el,cl.lineTitle__fields_elActive].join(' ')}>Все сотрудники</div>
                                <div className={cl.lineTitle__fields_el}>Все проекты</div>
                                <div className={cl.lineTitle__fields_el}>Статусы</div>
                            </div>
                            <div className={cl.lineTimeOptions_wrapper}>
                                <div className={cl.lineTitle__time}>
                                    <div className={cl.lineTitle__time_el}>
                                        <div className={cl.iconLineTime}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="url(#paint0_linear_2131_7125)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_2131_7125" x1="10.1" y1="12.275" x2="2.96263" y2="9.5598" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#855CBF"/>
                                                        <stop offset="0.494792" stopColor="#D444B4"/>
                                                        <stop offset="0.963543" stopColor="#FF493A"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className={cl.namingLineTime}>Текущая неделя</div>
                                    </div>
                                    <div className={cl.lineTitle__time_el}>
                                        <div className={cl.iconLineTime}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#A8C5DA"/>
                                            </svg>
                                        </div>
                                        <div className={cl.namingLineTime}>Предыдущая неделя</div>
                                    </div>
                                </div>
                                <div className={cl.lineTitle__options}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 12.75C9.69036 12.75 10.25 13.3096 10.25 14C10.25 14.6904 9.69036 15.25 9 15.25C8.30964 15.25 7.75 14.6904 7.75 14C7.75 13.3096 8.30964 12.75 9 12.75Z" fill="#1C1C1C"/>
                                        <path d="M14 12.75C14.6904 12.75 15.25 13.3096 15.25 14C15.25 14.6904 14.6904 15.25 14 15.25C13.3096 15.25 12.75 14.6904 12.75 14C12.75 13.3096 13.3096 12.75 14 12.75Z" fill="#1C1C1C"/>
                                        <path d="M20.25 14C20.25 13.3096 19.6904 12.75 19 12.75C18.3096 12.75 17.75 13.3096 17.75 14C17.75 14.6904 18.3096 15.25 19 15.25C19.6904 15.25 20.25 14.6904 20.25 14Z" fill="#1C1C1C"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={cl.line_chart_body}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line strokeWidth={4} type="monotone" dataKey="Предыдущая неделя" stroke="#A8C5DA" activeDot={{ r: 8 }} />
                                    <Line strokeWidth={4} type="monotone" dataKey="Текущая неделя" stroke="#855CBF" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className={cl.range_wrapper}>
                        <div className={cl.range_title}>Коммун. расчеты</div>
                        <div className={cl.range_body}>
                            {traffic.map((el,index)=>
                                <div className={cl.range_element} key={el.title}>
                                    <div className={cl.range_element__name}>{el.title}</div>
                                    <div className={cl.range_element__input}>
                                        <div className={cl.range_start}> </div>
                                        <input
                                            type="range"
                                            readOnly
                                            min="0"
                                            max={MAX}
                                            style={getBackgroundSize(index)}
                                            value={el.value}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cl.bar_pie_chart}>
                    <div className={cl.barChart}>
                        <div className={cl.barChart__title}>Задачи по отделам</div>
                        <div className={cl.barChart__graph}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={dataBar}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 0,
                                        bottom: 5,
                                    }}
                                    barSize={15}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }}/>
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="Задачи" fill="#8884d8" >
                                        {dataBar.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colorsBar[index % 20]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className={cl.pieChart}>
                        <div className={cl.pieChart__title}>Обращения в УК по отделам (все объекты) </div>
                        <div className={cl.pieChart__graph}>
                            <div className={cl.pieChart__graph_body}>
                                <PieChart width={118} height={118} >
                                    <Pie
                                        data={dataPie}
                                        innerRadius={40}
                                        outerRadius={60}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {dataPie.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colorsPie[index % colorsPie.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </div>
                            <div className={cl.pieChart__graph_description}>
                                <div className={cl.pieInfoEl}>
                                    <div className={cl.pieInfoEl__name}>
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="url(#paint0_linear_2164_2804)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_2164_2804" x1="10.1" y1="12.275" x2="2.96263" y2="9.5598" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#855CBF"/>
                                                        <stop offset="0.494792" stopColor="#D444B4"/>
                                                        <stop offset="0.963543" stopColor="#FF493A"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div>Электрика</div>
                                    </div>
                                    <div className={cl.pieInfoEl__value}>38.6%</div>
                                </div>
                                <div className={cl.pieInfoEl}>
                                    <div className={cl.pieInfoEl__name}>
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#C6C7F8"/>
                                            </svg>
                                        </div>
                                        <div>Сантехника</div>
                                    </div>
                                    <div className={cl.pieInfoEl__value}>22.5%</div>
                                </div>
                                <div className={cl.pieInfoEl}>
                                    <div className={cl.pieInfoEl__name}>
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#BAEDBD"/>
                                            </svg>
                                        </div>
                                        <div>Клиннинг</div>
                                    </div>
                                    <div className={cl.pieInfoEl__value}>30.8%</div>
                                </div>
                                <div className={cl.pieInfoEl}>
                                    <div className={cl.pieInfoEl__name}>
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#2684FF"/>
                                            </svg>
                                        </div>
                                        <div>Строительство</div>
                                    </div>
                                    <div className={cl.pieInfoEl__value}>8.1%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightAdminMenu/>
        </div>
    );
}




export default Admin;