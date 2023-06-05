const express = require('express');
const app = express();
const employees = require('./employee.json');
// EndPoint
app.get('/employees', (req, res) => {
    res.json(employees);
});
// Create Endpoint to pick certain employee by ID
app.get('/employees/:employeeID', (req,res) => {
    const employeeID = parseInt(req.params.employeeID);
    const employee = employees.employees.find(emp => emp.employeeID === employeeID);
    if(employee) {
        res.json(employee);
    } else{
        res.status(404).json({ error: 'Employee not found'});
    }
});
app.listen(3000, () => {
    console.log('Server up and running on Port 3000')
});
