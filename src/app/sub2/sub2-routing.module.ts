import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SublistComponent } from './sublist/sublist.component';
const routes: Routes = [  {
  path: '',
  component: SublistComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sub2RoutingModule { }
