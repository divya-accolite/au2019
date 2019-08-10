import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import {  Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private sub:any;
  private Address: any;
  pageTitle : String = "Employee Details";
  employees : any;
  EmployeeId  :Number;
  Name : string;
  empid: number;
  Department : string;
  update : Boolean = false;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }
  // GetEmployee() : void{
  //   this.employeeService.getEmployees().subscribe(employees=>
  //     this.employees = employees);
  // };
  ngOnInit() {
     this.route.params.subscribe(params => {
      let id = params['id'];
      this.empid = id;
      console.log(id);
     // Retrieve EmployeeDetails with Id route param
      this.employeeService.findDetailsById(this.empid).subscribe(
        employees => this.employees = employees);
  });
  }

  Update(emp){
    this.update = true;
  }

  Save(id,empid,name,dept,address){
    this.update=false;
    this.employeeService.UpdateEmployee(id,empid,name,dept,address);
    console.log(id + name + dept + address);

  }

}
