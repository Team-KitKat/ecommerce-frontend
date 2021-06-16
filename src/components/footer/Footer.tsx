import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';
import companyLogo from '../../assets/images/cmpanyLogo.png';

const Footer: React.FC = () => {
    return (
        <Row className='footer p-0 m-0'>
        <Col>
            <Row className='justify-content-center pt-4 pb-2 mt-3'>
                <span className='footer-menu'>HOME</span>
                <span className='ml-4 footer-menu'>ABOUT US</span>
                <span className='ml-4 footer-menu'>FAQ</span>
                <span className='ml-4 footer-menu'>PRICING</span>
                <span className='ml-4 footer-menu'>CONTACT US</span>
            </Row>
            <hr/>
            <Row className='justify-content-center pt-2'>
                <Image src={companyLogo} alt='Company Logo' className='footer-logo'/>
            </Row>
            <Row className='justify-content-center text-center py-2 footer-address'>
                <Col>
                    SoftVessel (Pvt) Ltd. <br/>
                    60 Cotta Road, Colombo 8, <br/>
                    Sri Lanka <br/>
                    +94 777 123 456 <br/>
                    +94 777 456 456 <br/>
                    Copyright © 2020 <br/>
                </Col>
            </Row>
            <Row className='justify-content-center pb-4 pt-2 footer-icons'>
                <span><i className='feather-facebook'/></span>
                <span><i className='feather-twitter pl-2'/></span>
                <span><i className='feather-instagram pl-2'/></span>
            </Row>
        </Col>
        </Row>
    );
};

export default Footer;