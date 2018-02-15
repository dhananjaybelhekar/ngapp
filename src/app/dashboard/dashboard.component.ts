import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  //heroes: Hero[] = [];
  hero:any;
  //constructor(private heroService: HeroService) { }
  constructor() {
    this.hero= {};
   }

  ngOnInit() {
    this.hero= {};
  }
  show(data:any){
    console.log(this.hero);
    console.log(data);
  }
  onSubmit(data:any){
    console.log(data);
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  // }
}
