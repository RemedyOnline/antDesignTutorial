import React from 'react'
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import pic from "../assets/images/RemedyOnline-Logo.png"

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between text-center items-center my-auto py-auto'>
        <h1 className='text-2xl'>Vendor Dashboard</h1>
        <div className='flex gap-3'>
          <Avatar size={48} icon={<UserOutlined />} />
          <Avatar size={48} src={pic} />
        </div>
      </div>
    </div>
  )
}

export default Navbar