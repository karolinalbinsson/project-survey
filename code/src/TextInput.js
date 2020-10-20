import React, {useState} from 'react';
import { InvalidInput } from 'InvalidInput';


export const TextInput = (props) => {

  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  const handleChange = (event) =>{
    setIsValid(validateInput(event.target.value));
    setName(event.target.value);
  }

  const clickNextButton = (value) =>{
    if(validateInput(value)) {
      props.onChange(name);
    }
  }

  const validateInput = (value) => {
    const regex = /\d/g;
    if(value.length > 1 && value.length !== "" && !regex.test(value))
    {
       setIsValidated(true);
       return true;
    }
   
    else {
      setIsValidated(true);
      return false;
    }
    
}

  return (
    <div className="question-container">
      <label className="question-label">{props.text}</label>
      <input
        type="text"
        onChange={handleChange}
        value={name}
        autoFocus
        required
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
      ></input>
      {!isValid && isValidated && <InvalidInput />}
      {isValid &&
      <button className="next-button"
        type="button"
        //onClick={(event) => clickNextButton(event.target.value)}
        onClick={(event) => clickNextButton(name)}
      >
       &#x3e;&#x3e;
      </button>}
  </div>
  );
}