import React from 'react';

const Form = ({ setValue, handleChange, handleClick }) => {
  return (
    <form>
      <input
        value={ setValue }
        onChange={ (e) => handleChange(e) }
        type="text"
        placeholder="idea title"
      />
      <button
        onClick={ (e) => handleClick(e) }
      >Save</button>
    </form>
  )
}

export default Form;
