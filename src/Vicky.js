/*import { useState } from "react";
import image from "./img/images.jpeg";
function Form() {
  const [Data, setData] = useState({
    name: "",
    fathername: "",
    mothername: "",
    address: "",
    age: ""
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
      \n${address}
      \n${age}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={Data.name}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your name:"
        /><br/>
        <input
          name="fathername"
          value={Data.fathername}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your Father name:"
        /><br/>
        <input
          name="mothername"
          value={Data.mothername}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your Mother name:"
        /><br/>
        <input
          name="address"
          value={Data.address}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your Address:"
        /><br/>
        <input
          name="age"
          value={Data.age}
          type="number"
          onChange={(e) => handleChange(e)}
          placeholder="Enter your age:"
        /><br/>
        <button type="submit">submit</button>
      </form>
      <img src={image} alt="Form illustration" />
    </div>
  );
}
export default Form;*/