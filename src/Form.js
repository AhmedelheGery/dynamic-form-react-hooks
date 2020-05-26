import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [ownerState, setOwnerState] = useState({
    owner: '',
    description: '',
  });
  const handleOwnerChange = (e) => setOwnerState({
    ...ownerState,
    [e.target.name]: [e.target.value],
  });
  const blankCat = { name: '', age: '' };
  const [catState, setCatState] = useState([{...blankCat
  }])
  const addCat = () => {
    setCatState([...catState, {...blankCat}]);
  };
  const handleCatChange = (e) => {
    const updatedCats = [...catState];
    updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    setCatState(updatedCats);
  };
  const onSubmit= (e) => {
    e.preventDefault()
    console.log("ownerState",ownerState);
    console.log("catState",catState);
  }
  return (
    <form className="form-container" onSubmit={onSubmit} autoComplete="off">
      <div>
        <label htmlFor="owner">Owner</label>
        <input 
        className="form-input" 
        type="text" 
        name="owner" 
        id="owner" 
        value={ownerState.owner}
        onChange={handleOwnerChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          className="form-input"
          type="text"
          name="description"
          id="description"
          value={ownerState.description}
          onChange={handleOwnerChange}
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
                value={catState[idx].name}
                onChange={handleCatChange}
              />
              <label htmlFor={ageId}>Age</label>
              <input
                type="text"
                name={ageId}
                data-idx={idx}
                id={ageId}
                className="age"
                className="age"
                value={catState[idx].age}
                onChange={handleCatChange}
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
