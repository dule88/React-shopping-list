import{ useState } from 'react'
import styles from './Form.module.css';


const Form = ({setGroceries}) => {

  const [groceryValue, setgroceryValue] = useState('');

  // FUNCTION THAT ADD GROCERIES TO THE LIST
  const addToCart = (event) =>{
    event.preventDefault();

    let newGrocery = {
      name: groceryValue
    };

    if(groceryValue !== '') {
      setGroceries(previousGrocery => [...previousGrocery, newGrocery])

      setgroceryValue('');
      
    }
  }


  return (
    <form>
          <input className={styles.inputForm} type="text" value={groceryValue} onChange={(event) => {setgroceryValue(event.target.value)}}  placeholder='Enter Grocery'></input>
          <button onClick={addToCart} className={styles.btn}>Cart</button>
          
    </form>
  )
}

export default Form;
