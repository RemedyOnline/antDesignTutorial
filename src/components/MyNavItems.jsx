import React, { useState } from 'react'
import navItems from '../constants/navItems';
import { Menu } from 'antd';

const MyNavItems = () => {

    const [currentNav, setCurrentNav] = useState("overview");

    const onClick = (e) => {
        console.log("click", e);
        setCurrentNav(e.key);
    }

    return (
        <div>
            <Menu className='text-white mx-auto text-center h-auto items-center bg-red-200 '
                onClick={onClick} selectedKeys={[currentNav]} mode='horizontal'
                items={navItems}
            />
        </div>
    )
}

export default MyNavItems;