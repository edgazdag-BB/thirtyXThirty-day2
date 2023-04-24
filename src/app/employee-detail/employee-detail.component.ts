import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() employeeUpdate: EventEmitter<Employee> = new EventEmitter<Employee>();

  deparmentOptions: string[] = ['HR', 'IT', 'Sales', 'Marketing'];

  constructor() { }

  ngOnInit(): void {
  }

  updateEmployeeDetails(employee: Employee) {
    this.employeeUpdate.emit(employee);
  }
}
