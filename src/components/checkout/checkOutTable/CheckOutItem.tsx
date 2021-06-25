import React from 'react';
import Item from '../../../assets/images/onions.jpg';
import {Image} from "react-bootstrap";

const CheckOutItem: React.FC = () => {
    return (
        <tr>
           <td>
               <label>1</label>
           </td>
            <td className='image-con'>
                <Image src={Item} alt='Item Image' className='item-image'/>
            </td>
            <td>
                <label>Onions</label>
            </td>
            <td>
                <i className='feather-minus-circle text-secondary px-2'/> <label> 1 </label>  <i className='feather-plus-circle text-secondary px-2'/>
            </td>
            <td>
                <label className='text-secondary'>Rs.120.00</label>
            </td>
            <td>
                <label className='text-secondary'>Rs.120.00</label>
            </td>
            <td>
                <i className='feather-trash text-secondary' />
            </td>
        </tr>
    );
};

export default CheckOutItem;