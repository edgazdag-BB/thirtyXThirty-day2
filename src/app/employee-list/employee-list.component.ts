import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  @Input() employeeList!: Employee[];
  @Output() editEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() deleteEmployee: EventEmitter<number> = new EventEmitter<number>();
  @Output() addEmployee = new EventEmitter();
  
  displayedColumns: string[] = ['id', 'name', 'department', 'delete'];
  
  constructor() { }

  updateEmployee(employee: Employee) {
    this.editEmployee.emit({...employee});
  }
}
