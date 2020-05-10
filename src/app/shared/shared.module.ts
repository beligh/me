import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuicklinkModule} from 'ngx-quicklink';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [NavigationComponent],
  imports: SharedModule.MODULE_LIST,
  exports: SharedModule.EXPORT_LIST,
})
export class SharedModule {
  static readonly MODULE_LIST = [
    CommonModule,
    RouterModule,
    QuicklinkModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    CdkStepperModule,
    MatStepperModule,
    MatExpansionModule
  ];

  static readonly EXPORT_LIST = [
    ...SharedModule.MODULE_LIST,
    NavigationComponent
  ];
}
