import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginformComponent} from './Component/loginform/loginform.component';
import { EmployeeFormComponent } from './Component/employee-form/employee-form.component';
import { WizardComponent } from './Component/wizard/wizard.component';

const routes: Routes = [
  {path: '', component: LoginformComponent},
  {path: 'login', component: LoginformComponent},
  { path: 'employeeform', component: EmployeeFormComponent },
    { path: 'Detailsforms', component: WizardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
