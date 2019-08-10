import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Department } from '../department';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department : Department[];
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getDepartments().subscribe(department=>
      this.department = department);
      console.log(this.department);
  }

}
