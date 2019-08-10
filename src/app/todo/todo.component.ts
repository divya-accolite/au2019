import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todo : Todo[];
showvar : boolean ;
  constructor() { }

  ngOnInit() {
  }
  showdetails(todo){
    this.todo = todo;
    console.log(todo);
    console.log("in parent");
    this.showvar = true;
  }
}
