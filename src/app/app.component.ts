import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignment';

  constructor(private router: Router) { }

  redirectemp(){
    this.router.navigate(['./employees']);
  }
  
  redirectdept(){
    this.router.navigate(['./department']);
  }
  
  redirecttodo(){
    this.router.navigate(['./todo']);
  }
}
