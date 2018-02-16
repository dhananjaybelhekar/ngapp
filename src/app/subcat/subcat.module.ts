import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcatRoutingModule } from './subcat-routing.module';
import { SubcatComponent } from './subcat.component';
import { ShowComponent } from './show/show.component';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  imports: [
    CommonModule,
    SubcatRoutingModule,
    DataTablesModule
  ],
  declarations: [SubcatComponent, ShowComponent]
})
export class SubcatModule { }
