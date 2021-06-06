import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import BannerImg from "../../assets/images/banner.jpg"
import LeaveImg from "../../assets/images/leavesLogo.png"

const Welcome: React.FC = () => {
    return (
            <Row className='welcome-section p-0 m-0'>
                <Col xs={12} lg={12} sm={12} xl={12} md={12} className='p-0 m-0'>
                    <Image src={BannerImg} alt="Banner Image" className='banner-image'/>
                </Col>
                <Col xs={{span: 6,offset: 6}} lg={{span: 5,offset: 7}} md={{span: 6,offset: 6}} sm={{span: 6,offset: 6}} xl={{span: 5,offset: 7}} className='banner-content'>
                    <Image src={LeaveImg} alt='leave image' className='leave-image'/>
                    <br/>
                    <span>100% Healthy & Affordable</span>
                    <h3>Organic Vegetables</h3>
                    <span>Small Changes Big Difference</span>
                    <br/>
                    <Button className='btn-shop'>Shop Now</Button>
                </Col>
            </Row>
    );
};

export default Welcome;