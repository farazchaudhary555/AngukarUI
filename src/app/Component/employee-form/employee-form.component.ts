import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormAPIService} from '../../Services/form-api.service';

interface Employee {
  employeeId: string;
  employeeName: string;
  address: string;
  city: string;
  createdBy: string;
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  @Output() next = new EventEmitter<void>();

  employeeForm!: FormGroup;
  employees: Employee[] = [];

  constructor(private fb: FormBuilder,private bindapi:FormAPIService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      createdBy: ['', Validators.required],
    });
    this.loademployees();
  }

  submit() {
    //console.log("Submit called");
    // if (this.employeeForm.invalid) {
    //   this.employeeForm.markAllAsTouched();
    //   return;
    // }

    // this.bindapi.addemployee(this.employeeForm.value).subscribe({
    //   next: (res) => {
    //     console.log("Inserted Successfully", res);

    //     this.employeeForm.reset();

    //     this.loademployees();  // Refresh table

    //     this.next.emit();    // Move to next form/step
    //   },
    //   error: (err) => {
    //     console.error("Error inserting employee", err);
    //   }
    // });

  this.next.emit();

  }

  //table  data loading
   loademployees() {
    this.bindapi.getemployee().subscribe({
      next: (data: any) => {
        this.employees = data;
      },
      error: (err) => {
        console.error("Error loading clients", err);
      }
    });
  }

}
