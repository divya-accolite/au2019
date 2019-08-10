import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {DepartmentComponent} from './department/department.component';
import {DepartmentDetailsComponent} from './department-details/department-details.component';
import {TodoComponent} from './todo/todo.component';
//import { employeejson } from '../assets/Employee.json'
const routes: Routes = [{path:'employees',component:EmployeeListComponent},{path:'employee/:id',component:EmployeeDetailsComponent},
{path:'department',component:DepartmentComponent},{path:'department/:id',component:DepartmentDetailsComponent}
,{path:'todo',component:TodoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
