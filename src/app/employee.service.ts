import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
//import 'rxjs/Rx';
//import {map} from 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empid : number;
//public employeeListUrl = 'assets/Employee.json';
public employeeListUrl = 'http://localhost:3000/employee';
//public employeeDetailsUrl = 'assets/Employee.json'
public employeeAddUrl = 'http://localhost:52467/Employee/EmployeeAdd';
  constructor(public _http: Http, public httpclient : HttpClient) { }

  emps : any;
  selectemp : Employee;
  getEmployees():Observable<Employee[]>{
    return this._http.get(this.employeeListUrl).pipe(map((response:Response) => <Employee[]> response.json()));
    }
  
    getEmpbyId(id):Observable<Employee[]>{
      return this._http.get(this.employeeListUrl).pipe(map((response:Response) => <Employee[]> response.json()));
     // const selectemp =  emps.find()
    // return this.emps;
    }

    findDetailsById( id ){
      this.empid =id;
     // return this._http.get(this.employeeDetailsUrl)
      //.pipe(map((response:Response) => <Employee[]> response.json()))
    // return this.getEmployees();
     return this.httpclient.get('http://localhost:3000/employee/'+ id); 
    
    // return this.getEmployees().pipe(map(x => x.filter(y => y.EmployeeId === id)));
      
      }
      
      
      DeleteEmployee(id){
        return this.httpclient.delete('http://localhost:3000/employee/'+ id);
       }
       
       
       
      
       UpdateEmployee(id,empid,name,dept,address){
         fetch('http://localhost:3000/employee/'+ id,
         {
           method:'PUT',
           body:JSON.stringify({
             id:id,
             EmployeeId : empid,
             Name:name,
             Department : dept,
             Address : address

           }),
           headers :{
             "content-type" : "application/json;charset=UTF-8"
           }
         })
         .then(response=>response.json())
         .then(json => console.log(json))
       }

       getDepartments(){
        return this._http.get('assets/dept.json').pipe(map((response:Response) => <Department[]> response.json()));
       }


       getTodos(){
        return this._http.get('http://localhost:3000/todo').pipe(map((response:Response) => <Todo[]> response.json()));
       }

       Updatetodo(id,name,detail){
        fetch('http://localhost:3000/todo/'+ id,
        {
          method:'PUT',
          body:JSON.stringify({
            id:id,
            name : name,
            details : detail

          }),
          headers :{
            "content-type" : "application/json;charset=UTF-8"
          }
        })
        .then(response=>response.json())
        .then(json => console.log(json))
       }
      }
  

  
