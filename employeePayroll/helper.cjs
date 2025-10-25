const config = require('./config.json');
let { employeeData } = config;

const addNewEmployee = (data) => {
  const { id, name, role, basicPay } = data;
  employeeData = [...employeeData,{ id, name, role, basicPay } ]; 
  return employeeData;
};

const employeeExists = (id) => employeeData.some(employee => employee.id === id);


module.exports = { addNewEmployee, employeeExists};
