import React, { useState } from 'react'
import styles from './Form.module.css';


const Form = ({setGroceries}) => {

  const [grocerieValue, setgrocerieValue] = useState('');

  const formSubmited = (event) =>{
    event.preventDefault();

    let newGrocerie = {
      name: grocerieValue
    };

    if(grocerieValue !== '') {
      setGroceries(previousGrocerie => [...previousGrocerie, newGrocerie])

      setgrocerieValue('')
    }

    
  }
  
  return (
    <form onSubmit={formSubmited}>
          <input className={styles.inputForm} type="text" value={grocerieValue} onChange={(event) => {setgrocerieValue(event.target.value)}}  placeholder='Enter Grocerie'></input>
          <button className={styles.btn}>Cart</button>
          
    </form>
  )
}

export default Form;
