const { addNewEmployee, employeeExists} = require('./helper.cjs');


const registerEmployee = (data) => {
  const { id, name, role, basicPay } = data;
  return employeeExists(id)
    ? `Employee with ID ${id} already exists.`
    : addNewEmployee({ id, name, role, basicPay });
};



console.log(registerEmployee({ id: 107, name: "Nilofer", role: "QA Tester", basicPay: 15000 }));
console.log(registerEmployee({ id: 101, name: "Rahul", role: "Software Engineer", basicPay: 55000 }));
