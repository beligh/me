import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@app/shared/shared.module';
import {PageNotFoundComponent} from '@app/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PageNotFoundModule { }
