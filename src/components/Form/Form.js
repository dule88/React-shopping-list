import React from 'react'
import styles from './Form.module.css';


const Form = () => {
  return (
    <form>
          <input className={styles.inputForm} type="text" placeholder='Enter Grocerie'></input>
          <button className={styles.btn}>Cart</button>
    </form>
  )
}

export default Form;
