import React from 'react';
import { Row, Col } from 'antd';
import ApplicationCard from './ApplicationCard';

const ApplicationDualArea = (props) => {
  
  return (
      <div style={{width:'75vw',paddingLeft:'5vw'}}>
        <Row style={{direction:'rtl',fontFamily:'Segoe UI'}}>
            <Col flex style={{fontSize:'2.5em', color:' #4F4E49'}}>{props.title}</Col>
        </Row>
        <Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{width:'100%'}}>
                  <Col span={6}  onClick={props.openDrawer}><ApplicationCard/></Col>
                  <Col span={6}  onClick={props.openDrawer} ><ApplicationCard/></Col>
                  <Col span={6}  onClick={props.openDrawer} ><ApplicationCard/></Col>
                  <Col span={6}  onClick={props.openDrawer} ><ApplicationCard/></Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{width:'100%'}}>
                  <Col span={6} onClick={props.openDrawer}><ApplicationCard/></Col>
                  <Col span={6} onClick={props.openDrawer} ><ApplicationCard/></Col>
                  <Col span={6} onClick={props.openDrawer} ><ApplicationCard/></Col>
                  <Col span={6} onClick={props.openDrawer} ><ApplicationCard/></Col>
            </Row>
            
        </Row>
       
      </div>
  );
}

export default ApplicationDualArea;