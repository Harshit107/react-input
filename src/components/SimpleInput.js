import {  useEffect, useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("")
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false); 
  const [enterNameTouched, setEnteredNameTouched] = useState(false); 


  useEffect(() => {console.log("enterNameed :>> ", enteredName);}, [enteredName]);

  const handleInputChange = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
      return;
    }
  };

  const handleBlurHandler = () => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  }

  const handleformSubmit = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);    
    setEnteredName('');
  }

  const nameInputIsInvalid = !enteredNameIsValid && enterNameTouched;
  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={handleformSubmit}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={handleInputChange} onBlur={handleBlurHandler}/>
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
