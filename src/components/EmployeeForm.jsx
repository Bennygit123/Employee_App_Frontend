import React from 'react';
const EmployeeForm = () => {
  return (
    <div>
      <h1>Employee Form</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="designation">Designation:</label>
        <input type="text" id="designation" name="designation" />
        <br />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />
        <br />
        <label htmlFor="salary">Salary:</label>
        <input type="text" id="salary" name="salary" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;