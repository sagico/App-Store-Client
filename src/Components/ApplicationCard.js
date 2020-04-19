import React, { Fragment } from 'react';
import { Row, Col, Rate, Button, Space } from 'antd';
import vsImage from '../Static/Images/1024px-Visual_Studio_Code_1.35_icon.svg.png'

const ApplicationCard = (props) => {
  return (
    <Fragment>
      <Space>
       <Row className='ApplicationBox'>
           <Col style={{margin:'0.2vw', display:'content', maxWidth:'15vw'}}>
                <Row><Col style={{color:'#473988',fontSize:'1.2vmax'}}>Visual Studio Code</Col></Row>
                <Row style={{direction:'rtl'}}><Col style={{color:'#D1CFDA'}}>פיתוח</Col></Row>
                <Row><Col><Rate disabled defaultValue={3}/></Col></Row>
                <Row><Col><Button style={{backgroundColor: '#776FC4', border:'none', borderRadius:'5px',color:'white',marginTop:'6px'}}>הורד</Button></Col></Row>
           </Col>
           <Col><img src={vsImage} style={{width:'3vmax',borderRadius:'15px'}} /></Col>
       </Row>
       </Space>
    </Fragment>
  );
}

export default ApplicationCard;