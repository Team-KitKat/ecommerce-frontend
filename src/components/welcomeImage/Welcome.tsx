import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import BannerImg from "../../assets/images/banner.jpg"
import LeaveImg from "../../assets/images/leavesLogo.png"

const Welcome: React.FC = () => {
    return (
        <Container fluid={true} className='welcome-section m-0 p-0'>
            <Row className='p-0 m-0'>
                <Col xs={12} lg={12} sm={12} xl={12} md={12} className='p-0 m-0'>
                    <Image src={BannerImg} alt="Banner Image" className='banner-image'/>
                </Col>
            </Row>
            <Row className='banner-content p-0 m-0'>
                <Col xs={{offset: 6}} lg={{offset: 7}} md={{offset: 6}} sm={{offset: 6}}>
                    <Image src={LeaveImg} alt='leave image' className='leave-image'/>
                    <br/>
                    <span>100% Healthy & Affordable</span>
                    <h3>Organic Vegetables</h3>
                    <span>Small Changes Big Difference</span>
                    <br/>
                    <Button>Shop Now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;