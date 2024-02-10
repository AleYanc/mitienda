import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainRoutes } from './routes/main-routes';

const routes: Routes = [
  mainRoutes,
  { path: '', redirectTo: 'panel-de-control', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
