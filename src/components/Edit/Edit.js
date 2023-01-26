import styles from './Edit.module.css';


const Edit = ({componentForm}) => {

  return (
    <div className={styles.container}>
        <div className={styles.list}>
          
        <h2>Please enter a grocery:</h2>
        {componentForm}
        
        </div>
    </div>
  )
}

export default Edit;