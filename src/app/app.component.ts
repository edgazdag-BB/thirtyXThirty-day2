import { Component } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  idCounter: number = 5;
  employeeList: Employee[] = [
    {id: 1, firstName: "Ed", lastName: "Gazdag", age: 42, department: "IT"},
    {id: 2, firstName: "Brandon", lastName: "Humbolt", age: 33, department: "IT"},
    {id: 3, firstName: "Bill", lastName: "Smith", age: 35, department: "Sales"},
    {id: 4, firstName: "John", lastName: "Adams", age: 34, department: "HR"},
    {id: 5, firstName: "Jen", lastName: "Piper", age: 47, department: "Marketing"}
  ];

  currentEmployee: Employee;
  constructor() {
    this.currentEmployee = this.employeeList[0];
  }

  updateEmployee(employee: Employee) {
    this.currentEmployee = employee;
  }

  updateEmployeeDetails(employee: Employee) {
    this.currentEmployee = {...employee};
    
    this.employeeList = this.employeeList.map((emp) => 
      emp.id === employee.id ? {...employee} : emp
    );
  }

  addEmployee() {
    this.idCounter++;
    this.employeeList = [...this.employeeList, {id: this.idCounter, firstName: '', lastName: '', age: 0, department: ''}];
    //this.currentEmployee = {...newEmployee};
  }

  removeEmployee(id: number) {
    this.employeeList = this.employeeList.filter((emp) => emp.id !== id);
    this.currentEmployee = this.employeeList[0];
  }
}
