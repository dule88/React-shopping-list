import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ groceries }) => {

  return (
    <div className={styles.container}>
        <div className={styles.list}>
        <h2>List of Groceries</h2>
        <ul>
          {groceries.map((grocerie, idx) =>{
            return (
            
              <li key={idx}>
                {idx + 1}  {grocerie.name}
              </li>
            )
          })}
           
          
        </ul>
        </div>
    </div>
  )
}

export default Cart;