import styles from './Cart.module.css';


//FUNCTION FOR DELETING GROCERY FROM THE LIST
const Cart = ({ groceries, setGroceries }) => {

  const deleteGrocery = (idx) => {

    setGroceries(prevState => {
      let tempstate = [...prevState];
      tempstate.splice(idx,1);
      return tempstate;
    })
  }


  return (
    <div className={styles.container}>
        <div className={styles.list}>
        <h2>List of groceries</h2>
        <ul>

          {groceries.map((grocery, idx) =>{
            return (
            
              <li key={idx}>
                {`${idx + 1}.`}  {grocery.name}
                <button  onClick={() => {deleteGrocery(idx)}}>X</button>
              </li>
            )
          })}
    
        </ul>
        </div>
    </div>
  )
}

export default Cart;