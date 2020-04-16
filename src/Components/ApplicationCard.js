import React, { Fragment } from 'react';
import { Row, Col, Rate, Button, Space } from 'antd';
import vsImage from '../Images/1024px-Visual_Studio_Code_1.35_icon.svg.png'

const ApplicationCard = (props) => {
  return (
    <Fragment>
      <Space>
       <Row style={{width:'15vmax'}}>
           <Col style={{margin:'0.5vw'}}>
                <Row><Col style={{color:'#363636',fontSize:'1.2vmax'}}>Visual Studio Code</Col></Row>
                <Row style={{direction:'rtl'}}><Col>פיתוח</Col></Row>
                <Row><Col><Rate disabled defaultValue={3}/></Col></Row>
                <Row><Col><Button>הורד</Button></Col></Row>
           </Col>
           <Col><img src={vsImage} style={{width:'3vmax',borderRadius:'15px'}} /></Col>
       </Row>
       </Space>
    </Fragment>
  );
}

export default ApplicationCard;