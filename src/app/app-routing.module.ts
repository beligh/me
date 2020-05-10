import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuicklinkStrategy} from 'ngx-quicklink';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
