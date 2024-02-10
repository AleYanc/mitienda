import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';

const routes: Routes = [
  { path: 'panel-de-control', component: DashboardContainerComponent },
  { path: '', redirectTo: 'panel-de-control', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoreRoutingModule { }
