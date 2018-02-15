import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcatRoutingModule } from './subcat-routing.module';
import { SubcatComponent } from './subcat.component';

@NgModule({
  imports: [
    CommonModule,
    SubcatRoutingModule
  ],
  declarations: [SubcatComponent]
})
export class SubcatModule { }
