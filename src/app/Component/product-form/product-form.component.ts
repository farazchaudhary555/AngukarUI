import { Component, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormAPIService} from '../../Services/form-api.service';

interface product {
  prodId: string;
  productName: string;
  ProductPrice: string;
  Qty: string;
  createdBy: string;
}


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

@Output() next = new EventEmitter<void>();
@Output() prev = new EventEmitter<void>();

  productForm!: FormGroup;
  products: product[] = [];

  constructor(private fb: FormBuilder,private bindapi:FormAPIService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      prodId: ['', Validators.required],
      productName: ['', Validators.required],
      ProductPrice: ['', Validators.required],
      Qty: ['', Validators.required],
      createdBy: ['', Validators.required],
    });
    this.loadproducts();
  }

  submit() {
    // if (this.employeeForm.invalid) {
    //   this.employeeForm.markAllAsTouched();
    //   return;
    // }

    // const employeeData = this.employeeForm.value;
    // this.employees.push(employeeData);

    // this.employeeForm.reset();

    // this.bindapi.addproduct(this.productForm.value).subscribe({
    //   next: (res) => {
    //     console.log("Inserted Successfully", res);

    //     this.productForm.reset();

    //     this.loadproducts();  // Refresh table

    //     this.next.emit();    // Move to next form/step
    //   },
    //   error: (err) => {
    //     console.error("Error inserting product", err);
    //   }
    // });

  this.next.emit();

  }

  loadproducts() {
    this.bindapi.getproduct().subscribe({
      next: (data: any) => {
        this.products = data;
      },
      error: (err) => {
        console.error("Error loading products", err);
      }
    });
  }

goBack() {
  this.prev.emit();   
}

}
