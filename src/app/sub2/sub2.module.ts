import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sub2RoutingModule } from './sub2-routing.module';
import { SublistComponent } from './sublist/sublist.component';

@NgModule({
  imports: [
    CommonModule,
    Sub2RoutingModule
  ],
  declarations: [SublistComponent]
})
export class Sub2Module { }
