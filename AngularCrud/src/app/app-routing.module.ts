import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeelistComponent } from './employees/employeelist.component';

const routes: Routes = [
  {path: 'list',component: EmployeelistComponent},
  {path: 'create',component: CreateEmployeeComponent},
  {path: '',redirectTo: 'list', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
