import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import {Todo} from 'src/app/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo : Todo[];
  todss : Todo[];
  @Output() talk: EventEmitter< Todo[]> = new EventEmitter<Todo[]>();
  constructor(private _employeeService : EmployeeService) { }

  gettodolist() : void{
    this._employeeService.getTodos().subscribe(todo=>
      this.todo = todo);
  };
  ngOnInit() {
    this.gettodolist();
  }

  showdetails(todos){
    this.todss = todos;
    this.talk.emit(this.todss);
    }

}
