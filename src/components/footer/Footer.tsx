import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';
import footerIcons from '../../assets/images/footerIcons.png'

const Footer: React.FC = () => {
    return (
        <Col className='footer p-0 m-0'>
            <Row className='justify-content-center pt-4'>
                <span className='footer-menu'>ABOUT US</span>
                <span className='ml-5 footer-menu'>FAQ</span>
                <span className='ml-5 footer-menu'>DELIVERY INFO</span>
                <span className='ml-5 footer-menu'>CONTACT US</span>
            </Row>
            <Row className='justify-content-center'>
                <Image src={footerIcons} alt='Footer Web Icons' className='footer-icons'/>
            </Row>
            <Row className='justify-content-center py-3 copyright'>
                Copyright © 2020. All Rights Reserved. <span> Powered By Softvessel</span>
            </Row>
        </Col>
    );
};

export default Footer;