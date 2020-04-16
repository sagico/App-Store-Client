import React, { Fragment } from 'react';
import { Drawer, Menu, Avatar, Badge  } from 'antd';
import { UserOutlined, StarOutlined, SafetyOutlined, ContainerOutlined, DownloadOutlined } from '@ant-design/icons';

const SideBar = (props) => {
  return (
    <Fragment>
         <Drawer
          placement="right"
          closable={false}
          visible={true}
          drawerStyle={{backgroundColor:'#F6F5F8'}}
          bodyStyle={{marginTop:'15vh'}}
          mask={false}
          >

        <Avatar size={64} icon={<UserOutlined />} />

        <Menu
        style={{ width: 300}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        style={{backgroundColor:'#F6F5F8'}}
        >
        <Menu.ItemGroup key="g1">
            <Menu.Item key="1" className='Sidebar-List-Item' >תוכנות ממולצות   <StarOutlined /></Menu.Item>
            <Menu.Item key="2" className='Sidebar-List-Item'>קטגוריות <ContainerOutlined /></Menu.Item>
            <Menu.Item key="3" className='Sidebar-List-Item'>התוכנות שלי <SafetyOutlined /></Menu.Item>
            <Menu.Item key="4" className='Sidebar-List-Item'>עדכונים <DownloadOutlined /></Menu.Item>
          </Menu.ItemGroup>
          </Menu>
        </Drawer>
    </Fragment>
  );
}

export default SideBar
    ;
