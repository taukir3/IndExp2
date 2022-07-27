import axios from "axios";
import React, { useState } from "react";
const iniState = {
  uname: "",
  email: "",
  // gender: "",
  // hobbies: [],
  errMsg: {},
};

const Contact = () => {
  const [inputData, setInputData] = useState(iniState);
  const [err, setErr] = useState(false);
  // input handling=====
  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  // form submitting====
  const formSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
     
      console.log('ok',inputData);
    } else {
      setInputData({
        errMsg: inputData.errMsg
      });
      // console.log('not ok',inputData);
    }
  };
  // formValidating====
  const validateForm = () => {
    let isValid = true;
    if (inputData.uname === "") {
      isValid = false;
      setErr(true)
      inputData.errMsg.uname = "name is required...";
    }

    return isValid;
  };
  return (
    <>
      <h4>Contact Us</h4>
      <form onSubmit={formSubmit} className="bg-secondary form-group p-2">
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            className="my-1 p-1"
            name="uname"
            value={inputData.uname}
            onChange={handleInput} 
          />
        </div>
        {/* {inputData.errMsg.uname ? (
          <small>{inputData.errMsg.uname}</small>
        ) : null} */}
        {
          err && inputData.uname=='' ? <small>Name is required...</small> : null
        }
        <div>
          <input
            type="text"
            name="email"
            value={inputData.email}
            onChange={handleInput}
            placeholder="Enter Email"
            className="my-1 p-1"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      {/* <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="uname"
            aria-describedby="unameHelp"
            placeholder="Enter Name"
            name="uname"
            value={data.uname}
            onChange={handleInput}
          />
          {data.errMsg.uname ? <small>{data.errMsg.uname}</small> : null}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="Email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleInput}
          />
          {data.errMsg.email ? <small>{data.errMsg.email}</small> : null}
        </div>
        <div>
          <label>Gender</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleInput}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleInput}
            />
            Female
          </label>
        </div>
        <div>
          <label>Hobbies</label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="codding"
              className="mx-3"
              onChange={handleInput}
            />
            Codding
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              className="mx-3"
              onChange={handleInput}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="watching News"
              className="mx-3"
              onChange={handleInput}
            />
            Watching News
          </label>
        </div>
        <div>
          {data.errMsg.hobbies ? <small>{data.errMsg.hobbies}</small> : null}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
    
      </form> */}
    </>
  );

  // const [data, setData] = useState(iniState);
  // const [submitData, setSubmitData] = useState(false);

  // // input handling===========
  // const handleInput = (e) => {
  //   if (e.target.type === "checkbox") {
  //     let index = data.hobbies.indexOf(e.target.value);
  //     if (index !== -1) {
  //       data.hobbies.splice(data.hobbies.indexOf(e.target.value), 1);
  //     } else {
  //       data.hobbies.push(e.target.value);
  //     }
  //     setData({
  //       ...data,
  //       hobbies: data.hobbies,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       [e.target.name]: e.target.value,
  //     });
  //   }
  // };
  // // data Submitting=======
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     let data={
  //       uname:data.uname,
  //       email:data.email,
  //       gender:data.gender,
  //       hobbies:data.hobbies
  //     }
  //     axios.post("https://62cee967486b6ce8264f5f19.mockapi.io/form/:endpoint",data).then((res)=>{
  //     console.log('res',res);
  //     }).catch((err)=>{

  //     })
  //   } else {
  //     setData({
  //       ...data,
  //       errMsg: data.errMsg,
  //     });
  //     console.log(data.errMsg);
  //   }
  // };
  // const validateForm = (e) => {
  //   let isValid = true;
  //   if (data.uname === "") data.errMsg.uname = "name is required...";
  //   {
  //     isValid = false;
  //   }
  //   if (data.email == "") {
  //     isValid = false;
  //     data.errMsg.email = "email is required...";
  //   }
  //   if (data.hobbies.length <= 0) {
  //     isValid = false;
  //     data.errMsg.hobbies = "Please select atleast one hobby!";
  //   }
  //   return isValid;
  // };
};

export default Contact;
