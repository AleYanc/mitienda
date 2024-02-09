import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStoreRoutingModule } from './my-store-routing.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { TopInfoComponent } from './top-info/top-info.component';
import { DashboardActionsComponent } from './dashboard-actions/dashboard-actions.component';


@NgModule({
  declarations: [
    DashboardContainerComponent,
    TopInfoComponent,
    DashboardActionsComponent
  ],
  imports: [
    CommonModule,
    MyStoreRoutingModule
  ]
})
export class MyStoreModule { }
