import React from "react";
import "./Form.css";

const Form = () => {
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
        <input className="form-input" type="button" value="Add New Cat" />
      </div>
      <div>
        <input className="form-input" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
