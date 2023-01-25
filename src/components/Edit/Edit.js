import React from 'react';
import styles from './Edit.module.css';
import Form from '../Form/Form';

const Edit = () => {

  return (
    <div className={styles.container}>
        <div className={styles.list}>
        <h2>Please enter a Grocerie:</h2>
        <Form/>
       
        </div>
    </div>
  )
}

export default Edit;