import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    age: "",
    number: "",
  });
  console.log(data);

  const handleSubmit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        return;
      }
    }
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        <input
          type="number"
          placeholder="Number"
          onChange={(e) => setData({ ...data, number: e.target.value })}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default App;
