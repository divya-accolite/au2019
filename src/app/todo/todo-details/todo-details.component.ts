import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todo: Todo[];
  @Input() show : boolean = false;
  update : boolean = false;
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }
updatefunc(){
  this.update = true; 
}
updat(id,name,details){
  this.update=false;
  this.employeeService.Updatetodo(id,name,details);
  console.log(id + name + details);
}
}
