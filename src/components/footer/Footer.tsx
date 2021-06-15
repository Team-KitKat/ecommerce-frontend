import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';
import footerIcons from '../../assets/images/footerIcons.png';
import companyLogo from '../../assets/images/cmpanyLogo.png';

const Footer: React.FC = () => {
    return (
        <Col className='footer p-0 m-0'>
            <Row className='justify-content-center pt-4'>
                <span className='footer-menu'>HOME</span>
                <span className='ml-5 footer-menu'>ABOUT US</span>
                <span className='ml-5 footer-menu'>FAQ</span>
                <span className='ml-5 footer-menu'>PRICING</span>
                <span className='ml-5 footer-menu'>CONTACT US</span>
            </Row>
            <hr/>
            <Row className='justify-content-center'>
                <Image src={companyLogo} alt='Company Logo' className='footer-logo'/>
            </Row>
            {/*<Row className='justify-content-center'>*/}
            {/*    <Image src={footerIcons} alt='Footer Web Icons' className='footer-icons'/>*/}
            {/*</Row>*/}
            <Row className='justify-content-center text-center py-3 copyright'>
                {/*Copyright © 2020. All Rights Reserved. <span> Powered By Softvessel</span>*/}
                <Col>
                    SoftVessel (Pvt) Ltd. <br/>
                    60 Cotta Road, Colombo 8, <br/>
                    Sri Lanka <br/>
                    +94 777 123 456 <br/>
                    +94 777 456 456 <br/>
                    Copyright © 2020 <br/>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <span><i className='feather-facebook'/></span>
                {/*fff*/}
            </Row>
        </Col>
    );
};

export default Footer;