import React  , { Fragment, useState } from 'react'; 
import logo from './logo.svg';
import banner from '../Images/webbutveckling-it-2.webp';
import './App.css';
import SideBar from '../Components/sidebar';
import doodle from '../Images/doodles.webp'
import ApplicationDualArea from '../Components/ApplicationDualArea';



import { Layout, Drawer } from 'antd';


import 'antd/dist/antd.css';

const { Content, Sider } = Layout;
  const App = () => {
  const [isOpen, setIsOpen] = useState (false);
  return (
    <div style={{height:'100%'}} >
      <Layout  style={{height:'100%'}} >
        <Content className="App" style={{ padding: '2vh 4vw', height:'100%'}}>
          <div>
              <img src={banner} />
              <ApplicationDualArea title='המלצת השף' openDrawer={() => setIsOpen(true)}/>
          </div>
        </Content>
        <Sider>
          <SideBar/>
        </Sider>
      </Layout>   
      <Drawer
          title="אפליקציה"
          placement={'bottom'}
          closable={true}
          onClose={()=>setIsOpen(false)}
          visible={isOpen}
          height={'95vh'}
        >
         
          <p>Some contents...</p>
        </Drawer>  
    </div>
  );
}

export default App;
