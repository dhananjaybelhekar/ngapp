import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcatComponent } from './subcat.component';

const routes: Routes = [  {
  path: '',
  component: SubcatComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcatRoutingModule { }
