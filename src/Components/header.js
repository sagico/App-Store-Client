import React, { Fragment } from 'react';
import { Row, Col, Input   } from 'antd';
import { ShoppingOutlined, SearchOutlined, QqOutlined} from '@ant-design/icons';

const { Search } = Input;

const HeaderBar = (props) => {
  return (
    <Fragment>
     <Row style={{color:'#392A7D',fontSize:'20px', padding:'25px'}}>
         <Col span={6} style={{textAlign:'center'}} ><ShoppingOutlined className='IconsSizing' width={'32px'} height={'32px'} /></Col>
         <Col span={8} style={{textAlign:'center'}} >
         <Input size="large" style={{borderRadius:'12px', color:'#392A7D', width:'250px'}} className='searchBox' placeholder="חיפוש" suffix={<SearchOutlined />} />
         </Col>
         <Col span={10} style={{textAlign:'right'}}><QqOutlined  className='IconsSizing' /></Col>
     </Row>
    </Fragment>
  );
}

export default HeaderBar;