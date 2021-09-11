import React from 'react';
import {Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import avatar from "../../../assets/images/admin/avatar.png";
import LogoImage from '../../../assets/images/leavesLogo.png'


const ProfileImage: React.FC = () => {
    return (
        <Col xs={12} className="profile-image-container">
            <Image src={LogoImage} className="profile-image m-auto"/>
        </Col>
    );
};

export default ProfileImage;