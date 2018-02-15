import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcatRoutingModule } from './subcat-routing.module';
import { SubcatComponent } from './subcat.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  imports: [
    CommonModule,
    SubcatRoutingModule
  ],
  declarations: [SubcatComponent, ShowComponent]
})
export class SubcatModule { }
