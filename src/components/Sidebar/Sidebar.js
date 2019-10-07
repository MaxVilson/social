import React from 'react';
import MainNav from '../MainNav/MainNav';
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className = {style.sidebar}>
            <MainNav />
        </aside>
    )
}

export default Sidebar;