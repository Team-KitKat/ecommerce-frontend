import React from 'react';
import Item from '../../../assets/images/onions.jpg';
import {Image} from "react-bootstrap";
import {IProduct} from "../../../types/MainTypes";

type CheckoutItemProps = {
    num: number;
    product: IProduct;
}

const CheckOutItem: React.FC<CheckoutItemProps> = (props) => {

    const {num,product} = props;

    return (
        <tr>
           <td>
               <label>{num}</label>
           </td>
            <td className='image-con'>
                <Image src={Item} alt='Item Image' className='item-image'/>
            </td>
            <td>
                <label>{product.name}</label>
            </td>
            <td>
                <i className='feather-minus-circle text-secondary px-2'/> <label> {product.qty} </label>  <i className='feather-plus-circle text-secondary px-2'/>
            </td>
            <td>
                <label className='text-secondary'>Rs.{product.price}</label>
            </td>
            <td>
                <label className='text-secondary'>Rs.{product.total}</label>
            </td>
            <td>
                <i className='feather-trash text-secondary' />
            </td>
        </tr>
    );
};

export default CheckOutItem;