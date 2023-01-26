import React from 'react';
import styles from './Edit.module.css';


const Edit = (props) => {

  return (
    <div className={styles.container}>
        <div className={styles.list}>
        <h2>Please enter a Grocerie:</h2>
        
        {props.componentForm}
        
       
        </div>
    </div>
  )
}

export default Edit;