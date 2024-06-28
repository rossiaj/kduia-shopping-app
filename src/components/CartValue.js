// following 7 lines are original code
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// 
// const CartValue = () => {
// };
// 
// export default CartValue;
// following code copied from HOL
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;