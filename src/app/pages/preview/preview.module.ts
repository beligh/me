import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewComponent} from '@app/pages/preview/preview.component';
import {SharedModule} from '@app/shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: PreviewComponent },
];

@NgModule({
  declarations: [PreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PreviewModule { }
