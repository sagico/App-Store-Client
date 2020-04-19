import React, { Fragment } from 'react';
import { Drawer, Menu, Avatar, Badge  } from 'antd';
import { UserOutlined, StarOutlined, SafetyOutlined, ContainerOutlined, DownloadOutlined } from '@ant-design/icons';

const SideBar = (props) => {
  return (
    <Fragment>
      <div class='side'>

        <Avatar size={64} icon={<UserOutlined />} style={{marginLeft:'5vw'}} />

        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        style={{color:'#342868', backgroundColor:'#E5F8FF'}}
        >
        <Menu.ItemGroup key="g1">
            <Menu.Item key="1" className='Sidebar-List-Item' >תוכנות ממולצות   <StarOutlined /></Menu.Item>
            <Menu.Item key="2" className='Sidebar-List-Item'>קטגוריות <ContainerOutlined /></Menu.Item>
            <Menu.Item key="3" className='Sidebar-List-Item'>התוכנות שלי <SafetyOutlined /></Menu.Item>
            <Menu.Item key="4" className='Sidebar-List-Item'>עדכונים <DownloadOutlined /></Menu.Item>
          </Menu.ItemGroup>
          </Menu>
          </div>
    </Fragment>
  );
}

export default SideBar
    ;
