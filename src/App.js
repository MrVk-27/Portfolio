/*function welcome(){
  const fruits=['apple','banana','cherry'];
  return (<ul>
    {fruits.map((a,index) =>
    <li key={index}>{a}</li>
      )}
  </ul>
  );
    }
export default welcome;*/

/*import { useState } from 'react';
function Counter(){
  const [count,setCount]=useState(0);
  return <button onClick={()=> setCount(count+1)}>cliked {count} times</button>;
}
export default Counter;*/

/*import { useState } from 'react';

function FruitRevealer() {
  const fruits = ['apple', 'banana', 'cherry'];
  const [count, setCount] = useState(0);

  // Show fruits up to current count
  const visibleFruits = fruits.slice(0, count);

  return (
    <div>
      <button
        onClick={() => {
          if (count < fruits.length) {
            setCount(count + 1);
          }
        }}
      >
        Clicked {count} times
      </button>

      <ul>
        {visibleFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitRevealer;*/
/*import {useState} from 'react';
function FormExample() {
  const [Data, setData] = useState({
    name: '',
    fathername: '',
    mothername: '',
    address: '',
    age: ''
  });  
const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = (event) => {
    event.preventDefault();
    const { name, fathername, mothername, address, age } = Data;
    alert(` ${name}
      \n${fathername}
      \n${mothername}
      \n${address}\n
      ${age}`);
  };

return (
  <form onSubmit={handleSubmit}>
    <input
      name="name"
      value={Data.name}
      onChange={(e) => handleChange(e)}
      placeholder="Enter your name:"
      />
    <input
      name="fathername"
      value={Data.fathername}
      onChange={(e) => handleChange(e)}
      placeholder="Enter your Father name:"
      />
    <input
      name="mothername"
      value={Data.mothername}
      onChange={(e) => handleChange(e)}
      placeholder="Enter your Mother name:"
      />
    <input
      name="address"
      value={Data.address}
      onChange={(e) => handleChange(e)}
      placeholder="Enter your Address:"
      />
    <input
      name="age"
      value={Data.age}
      type="number"
      onChange={(e) => handleChange(e)}
      placeholder="Enter your age:"
      />
      <button type="submit">submit</button>
      </form>
);
}
export default FormExample;*/

import Portfolio from './Portfolio';
import './App.css';
function App() {
  return (
    <div>
      {/* <Vicky />
      <Anbu /> */}
      <Portfolio/>
    </div>
  );
}
export default App;