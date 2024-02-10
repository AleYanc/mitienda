import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStoreRoutingModule } from './my-store-routing.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { TopInfoComponent } from './top-info/top-info.component';
import { ButtonModule } from 'primeng/button';
import { ShutdownStoreComponent } from './shutdown-store/shutdown-store.component';
import { DashboardStatisticsComponent } from './dashboard-statistics/dashboard-statistics.component';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    TopInfoComponent,
    ShutdownStoreComponent,
    DashboardStatisticsComponent
  ],
  imports: [
    CommonModule,
    MyStoreRoutingModule,
    CommonModule,
    ButtonModule
  ]
})
export class MyStoreModule { }
