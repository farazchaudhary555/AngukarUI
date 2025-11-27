import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './Component/loginform/loginform.component';
import { EmployeeFormComponent } from './Component/employee-form/employee-form.component';
import { ProductFormComponent } from './Component/product-form/product-form.component';
import { ClientFormComponent } from './Component/client-form/client-form.component';
import { WizardComponent } from './Component/wizard/wizard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    EmployeeFormComponent,
    ProductFormComponent,
    ClientFormComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      ReactiveFormsModule,
  FormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
