import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  //heroes: Hero[] = [];
   closeResult: string;
  hero:any;
   model = {
    left: true,
    middle: false,
    right: false
  };
  //constructor(private heroService: HeroService) { }
  constructor(private modalService: NgbModal) {
    this.hero= {};
   }
 open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
