import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcatComponent } from './subcat.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/subcat', pathMatch: 'full' },
 {
  path: 'subcat',
  component: SubcatComponent,
  children: [
    
    {
      path: 'subcat',
      component: ShowComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcatRoutingModule { }
