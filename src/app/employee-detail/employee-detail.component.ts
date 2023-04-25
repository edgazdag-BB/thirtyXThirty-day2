import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  @Input() employee!: Employee;
  @Output() employeeUpdate: EventEmitter<Employee> = new EventEmitter<Employee>();

  departmentOptions: string[] = ['HR', 'IT', 'Sales', 'Marketing'];

  constructor() { }

}
