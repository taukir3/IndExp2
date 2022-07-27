// import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

const About = () => {
  const [input, setInput] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  const [editId, setEditId] = useState(null);
  // input handling====
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // form handling====
  const handleform = (e) => {
    e.preventDefault();
    if (editId) {
      let editedtodo = todoItem.map((item) => {
        if (item.id === editId) {
          return { ...item, input: input };
        }
        return item;
      });
      setTodoItem(editedtodo);
      setEditId(null);
    } else {
      let todos = {
        id: new Date().getTime().toLocaleString(),
        input: input,
        completed: false,
      };
      let updateTodo = [...todoItem, todos];
      setTodoItem(updateTodo);
    }
    setInput("");
  };
  // Removing item====
  const removeItem = (id) => {
    let remainingItem = todoItem.filter((item) => {
      return item.id !== id;
    });
    setTodoItem(remainingItem);
  };
  // editing item====
  const editItem = (id, input) => {
    setInput(input);
    setEditId(id);
    // goto handleform function
  };
  // handling checkbbox====
  const handleCheckBox = (e) => {
    let checkBoxTodo = todoItem.map((item, index) => {
      if (index == e.target.value) {
        return { ...item, completed: e.target.checked };
      }
      return item;
    });
    setTodoItem(checkBoxTodo);
  };
  return (
    <div>
    <h1>*</h1>
      <h1>About</h1>
      <h5>Add your wish here</h5>
      <div className=" d-flex p-3">
        <form onSubmit={handleform} className="p-2  ">
          <input
            type="text"
            value={input}
            placeholder="Write your item here"
            onChange={handleInput}
            className="text-capitalize "
          />
          <input
            type="submit"
            value={editId ? "update" : "Add Item"}
            className="btn btn-primary ms-1"
          />
        </form>
        {/* Displaying items==== */}
        <div className=" main_con shadow ms-5 p-2 w-50">
          <h5 className="mb-4">Your Added Items</h5>
          <div className="">
            {/* data iterating========== */}
            {todoItem.map((item, index) => {
              return (
                <>
                  <div
                    className="d-flex justify-content-between"
                    key={item.id}
                  >
                    <h6 className="text-capitalize p-1 shadow bg-info" key={item.id}>
                      <input
                        type="checkbox"
                        defaultChecked={item.completed}
                        value={index}
                        onChange={handleCheckBox}
                        className="m-1"
                      />
                      {item.completed ? <del>{item.input}</del> : item.input}
                    </h6>
                    <div className="">
                      <i
                        className="fa-solid fa-pen-to-square me-2"
                        onClick={() => editItem(item.id, item.input)}
                      ></i>

                      <i
                        className="fa-solid fa-trash me-2 "
                        onClick={() => removeItem(item.id)}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
