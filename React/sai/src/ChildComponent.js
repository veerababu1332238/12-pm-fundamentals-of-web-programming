// ChildComponent.js
import React from 'react';

function ChildComponent({ formDataArray }) {
  return (
    <div>
      <h2>Form Data in Child Component:</h2>
      <ul>
       {formDataArray?.map((form, index) => (
  <li key={index}>{`Name: ${form.name}, Email: ${form.email}`}</li>
))};
      </ul>
    </div>
  );
}

export default ChildComponent;
