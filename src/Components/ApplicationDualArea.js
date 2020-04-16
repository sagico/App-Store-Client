import React from 'react';
import { Row, Col } from 'antd';
import ApplicationCard from './ApplicationCard';

const ApplicationDualArea = (props) => {
  
  return (
      <div>
        <Row style={{direction:'rtl',fontFamily:'Segoe UI'}}>
            <Col flex style={{fontSize:'2.5em', color:' #4F4E49'}}>{props.title}</Col>
        </Row>
        <Row>
            <Row>
                  <Col span={4}  style={{margin:'1vmax'}}  onClick={props.openDrawer}><ApplicationCard/></Col>
                  <Col span={4}  style={{margin:'1vmax'}}  onClick={props.openDrawer} ><ApplicationCard/></Col>
                  <Col span={4}  style={{margin:'1vmax'}} onClick={props.openDrawer} ><ApplicationCard/></Col>
                  <Col span={4}  style={{margin:'1vmax'}} onClick={props.openDrawer} ><ApplicationCard/></Col>
                  <Col span={4}  style={{margin:'1vmax'}} onClick={props.openDrawer} ><ApplicationCard/></Col>
            </Row>
            <Row>
                  <Col span={4} style={{margin:'1vmax'}}><ApplicationCard/></Col>
                  <Col span={4}  style={{margin:'1vmax'}}><ApplicationCard/></Col>
                  <Col span={4}  style={{margin:'1vmax'}}><ApplicationCard/></Col>
                  <Col span={4}  style={{margin:'1vmax'}}><ApplicationCard/></Col>
                  <Col span={4}  style={{margin:'1vmax'}}><ApplicationCard/></Col>
            </Row>
            
        </Row>
       
      </div>
  );
}

export default ApplicationDualArea;