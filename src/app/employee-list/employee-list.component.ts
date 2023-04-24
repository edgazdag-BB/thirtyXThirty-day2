import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList!: Employee[];
  @Output() editEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() deleteEmployee: EventEmitter<number> = new EventEmitter<number>();
  @Output() addEmployee: EventEmitter<string> = new EventEmitter<string>();
  
  displayedColumns: string[] = ['id', 'name', 'department', 'delete'];
  
  constructor() { }

  ngOnInit(): void {
  }

  updateEmployee(employee: Employee) {
    this.editEmployee.emit({...employee});
  }

  removeEmployee(index: number) {
    this.deleteEmployee.emit(index);
  }

  addNewEmployee(addNew: string) {
    this.addEmployee.emit(addNew);
  }
}
