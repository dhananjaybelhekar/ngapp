import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Tour of Heroes';
  constructor(){
    console.log("AppComponent");
  }
}