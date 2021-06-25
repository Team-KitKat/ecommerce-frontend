import React from 'react';
import {Image, Row} from "react-bootstrap";
import EmptyImg from "../../../assets/images/empty_cart.png";

const EmptyCheckout: React.FC = () => {
    return (
        <tr>
            <td colSpan={7} className='text-center'>
                <Image src={EmptyImg} className='empty-image'/>
            </td>
        </tr>
    );
};

export default EmptyCheckout;