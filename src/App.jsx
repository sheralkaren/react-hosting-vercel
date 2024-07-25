import React, { useState } from "react";

function App() {
  // const [listStrikeThrough, setListStrikeThrough] = useState(false);
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const { value } = e.target;
    setItem(value);
  }

  function onSubmit() {
    setItems((prev) => [...prev, item]);
    setItem("");
    document.getElementById("input").focus();
  }

  function createList(item) {
    let listStrikeThrough = false;
    return (
      <li
        onClick={() => {
          listStrikeThrough = !listStrikeThrough;
          console.log(listStrikeThrough);
        }}
        style={{ textDecoration: listStrikeThrough && "line-through" }}
      >
        {item}
      </li>
    );
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" id="input" value={item} />
        <button onClick={onSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(createList)}</ul>
      </div>
    </div>
  );
}

export default App;
