import './App.css';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Edit from './components/Edit/Edit';
import Form from './components/Form/Form';


const App = () => {

  // const [editMode, setEditMode] = useState({mode:false, id:'', name: ''})

  const [groceries, setGroceries] = useState([
      {
        
        name: 'Kikiriki'
      },
      {
        
        name: 'Pivo'
      },
      {
        
        name: 'Cips'
      },
  ]);

  // console.log(groceries);
  // console.log(editMode);

  return (
    <div className="App">
        <h1>Shopping List</h1>
        
        <Edit 
        componentForm={<Form setGroceries={setGroceries}></Form>}
        >
        </Edit>

        <Cart groceries={groceries} setGroceries={setGroceries}/>

    </div>
  );
}

export default App;
