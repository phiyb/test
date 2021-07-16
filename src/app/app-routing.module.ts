import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmloyeecomComponent} from './emloyeecom/emloyeecom.component';
import {DepartmentcomComponent} from './departmentcom/departmentcom.component';
import {SingleformComponent} from './singleform/singleform.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'singleform', component: SingleformComponent},
  {path: 'departments', component: DepartmentcomComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
