import './App.css';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Edit from './components/Edit/Edit';
import Form from './components/Form/Form';


const App = () => {

  const [editMode, setEditMode] = useState({mode:false, id:'', name: ''})

  const [groceries, setGroceries] = useState([
      // {
      //   id: uuidv4(),
      //   name: 'Kikiriki'
      // },
      // {
      //   id: uuidv4(),
      //   name: 'Pivo'
      // },
      // {
      //   id: uuidv4(),
      //   name: 'Cips'
      // },
  ]);

  // console.log(groceries);
  console.log(editMode);

  return (
    <div className="App">
        <h1>Shopping List</h1>
        <Edit/>
        <Cart/>
    </div>
  );
}

export default App;
