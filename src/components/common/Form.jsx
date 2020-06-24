import React from 'react';
import Input from "./Input";
import Button from "./Button";


const Form = ({columns, data, errors, handleChange, handleSubmit}) => {

  return (
    <div className="container">
      <form>
        {columns.map(columnName => (
          <Input
            key={columnName}
            name={columnName}
            label={columnName}
            value={data[columnName]}
            type="input"
            error={errors[columnName]}
            onChange={handleChange}
          />
        ))}
        <Button
          label="Save"
          classes="btn alert btn-primary"
          disabled={Object.keys(errors).length}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
