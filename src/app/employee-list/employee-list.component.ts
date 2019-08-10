import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  pageTitle : string = 'Employee List';
  employees : Employee[];
  addEmployee : boolean = false;
  newEmployee : Employee = new Employee();
  EmployeeId  :Number;
  Name : string;
  Department : string;
  edit : Boolean = false;
  GetEmployee() : void{
    this._employeeService.getEmployees().subscribe(employees=>
      this.employees = employees);
  };
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.GetEmployee();
  }

  

	DeleteEmployee(employee):void {
    if (confirm("Are you sure you want to delete " + employee.Name + "?")) {
      this._employeeService.DeleteEmployee(employee.id).subscribe(
         data => {
           // refresh the list
           this.GetEmployee();
           return true;
         },
         error => {
           console.error("Error deleting Employee!");
         }
      );
        }
    }
}
