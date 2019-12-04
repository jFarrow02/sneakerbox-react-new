import React, {useState} from 'react';
import './Cart.scss';

/**
 * This component renders a thumbnail/summary display of the user's shopping cart contents
 */
const Cart = ()=>{

    const [itemCount] = useState(0);
    return(
        <div className='Cart'>
            Cart goes here
            {
                itemCount > 0 && <h4># of Items: {itemCount}</h4>
            }
            {
                itemCount === 0 && <h4>No Items</h4>
            }
        </div>
    );
}

export default Cart;