import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const blankCat = { name: '', age: '' };
  const [catState, setCatState] = useState([{...blankCat
  }])
  const addCat = () => {
    setCatState([...catState, {...blankCat}]);
  };
  return (
    <form className="form-container">
      <div>
        <label htmlFor="owner">Owner</label>
        <input className="form-input" type="text" name="owner" id="owner" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          className="form-input"
          type="text"
          name="description"
          id="description"
        />
      </div>
      <div>
        <input 
        className="form-input" 
        type="button" 
        value="Add New Cat" 
        onClick={addCat}
        />
        {
        catState&&catState.map((val, idx) => {
          const catId = `name-${idx}`;
          const ageId = `age-${idx}`;
          return (
            <div key={`cat-${idx}`}>
              <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
              <input
                type="text"
                name={catId}
                data-idx={idx}
                id={catId}
                className="name" 
              />
              <label htmlFor={ageId}>Age</label>
              <input
                type="text"
                name={ageId}
                data-idx={idx}
                id={ageId}
                className="age"
              />
            </div>
          );      
        })
      }
      </div>
      <div>
        <input className="form-input" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
