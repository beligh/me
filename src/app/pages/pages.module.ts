import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillsComponent } from './skills/skills.component';
import { PreviewComponent } from './preview/preview.component';
import {SharedModule} from '@app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, SkillsComponent, PreviewComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
