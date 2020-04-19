import React  , { Fragment, useState } from 'react'; 
import logo from './logo.svg';
import banner from '../Static/Images/webbutveckling-it-2.webp';
import './App.css';
import SideBar from '../Components/sidebar';
import doodle from '../Static/Images/doodles.webp'
import ApplicationDualArea from '../Components/ApplicationDualArea';

import HeaderBar from '../Components/header';

import { Layout, Modal } from 'antd';


import 'antd/dist/antd.css';

const { Content, Sider, Header } = Layout;
  const App = () => {
  const [isOpen, setIsOpen] = useState (false);
  return (
    <div style={{height:'100%'}} >
      
     
      <Layout  style={{height:'100%'}} >
        
        <Content className="App" style={{ paddingRight: '11vw', height:'100%', backgroundColor:'white',overflowY:'hidden'}}>
        <HeaderBar/>
          <div>
            <img src={banner} className='banner'/>
              <ApplicationDualArea title='המלצת השף' openDrawer={() => setIsOpen(true)}/>
          </div>
        </Content>
        <Sider style={{backgroundColor:'white'}}>
          <SideBar/>
        </Sider>
      </Layout>   

      <Modal
          mask={false}
          closable={true}
          onCancel={()=>setIsOpen(false)}
          visible={isOpen}
          width={'70vw'}
          bodyStyle={{height:'70vh'}}
          footer={null}
        >
         <div className='ModalCircle'></div>
         
        </Modal>
    </div>
  );
}

export default App;
