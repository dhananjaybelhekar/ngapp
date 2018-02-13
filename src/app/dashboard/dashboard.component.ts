import { Component, OnInit } from '@angular/core';
//import { NewcmpComponent } from './newcmp/newcmp.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  //constructor(private heroService: HeroService) { }
  constructor(){
    console.log("DashboardComponent");
  }

  ngOnInit() {
//    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
