import React, {useState} from 'react'
import cl from './admin.module.css'
import {PieChart, Pie, BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LeftAdminMenu from "../../component/UI/LeftAdminMenu/LeftAdminMenu";
import RightAdminMenu from "../../component/UI/RightAdminMennu/RightAdminMenu";
import TopAdminMenu from "../../component/UI/topAdminMenu/TopAdminMenu";
import Analytics from "./Analytics/Analytics";
import Kanban from "./Kanban/Kanban";
export const Admin = () => {

    const [visibleLeftMenu, setVisibleLeftMenu]=useState(true)
    const [visibleRightMenu, setVisibleRightMenu]=useState(true)
    const [page, setPage]=useState('Аналитика')
    return (
        <div>
            {visibleLeftMenu?
                <LeftAdminMenu
                    page={page}
                    setPage={setPage}
                />
            :
                <></>
            }
            <TopAdminMenu
                visibleLeft={visibleLeftMenu}
                setVisibleLeftMenu={setVisibleLeftMenu}
                visibleRightMenu={visibleRightMenu}
                setVisibleRightMenu={setVisibleRightMenu}
            />
            {
                (page==='Аналитика' && <Analytics/>)||
                (page==='Канбан' && <Kanban/>)


            }
            {
                visibleRightMenu?
                    <RightAdminMenu/>
                    :
                    <></>
            }
        </div>
    );
}




export default Admin;