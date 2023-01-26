import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ groceries, setGroceries }) => {

  const deleteGrocerie = (idx) => {

    setGroceries(prevState => {
      let tempstate = [...prevState];
      tempstate.splice(idx,1);
      return tempstate;
    })
  }

 

  return (
    <div className={styles.container}>
        <div className={styles.list}>
        <h2>List of Groceries</h2>
        <ul>
          {groceries.map((grocerie, idx) =>{
            return (
            
              <li key={idx}>
                {`${idx + 1}.`}  {grocerie.name}
                <button  onClick={() => {deleteGrocerie(idx)}}>X</button>
              </li>
            )
          })}
           
          
        </ul>
        </div>
    </div>
  )
}

export default Cart;