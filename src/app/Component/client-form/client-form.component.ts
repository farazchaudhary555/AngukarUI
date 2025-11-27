import { Component, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormAPIService} from '../../Services/form-api.service';

interface Client {
  clientId: string;
  clientName: string;
  clientlocation: string;
  contact: string;
  createdBy: string;
}

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {

@Output() next = new EventEmitter<void>();
@Output() prev = new EventEmitter<void>();

  clientForm!: FormGroup;
  clients: Client[] = [];

  constructor(private fb: FormBuilder,private bindapi:FormAPIService) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      clientId: ['', Validators.required],
      clientName: ['', Validators.required],
      clientlocation: ['', Validators.required],
      contact: ['', Validators.required],
      createdBy: ['', Validators.required],
    });
   // this.loadClients();
  }

  //insert data api binding
  submit() {
  //   console.log("Submit called");
  // if (this.clientForm.invalid) {
  //   this.clientForm.markAllAsTouched();
  //   return;
  // }

    //  const clientData = this.clientForm.value;

    // this.bindapi.addclient(clientData).subscribe({
    //   next: (res) => {
    //     console.log("Inserted Successfully", res);

    //     this.clientForm.reset();

    //     this.loadClients();  // Refresh table

    //     this.next.emit();    // Move to next form/step
    //   },
    //   error: (err) => {
    //     console.error("Error inserting client", err);
    //   }
    // });
  this.next.emit();

  }

  //table  data loading
 loadClients() {
    this.bindapi.getclient().subscribe({
      next: (data: any) => {
        this.clients = data;
      },
      error: (err) => {
        console.error("Error loading clients", err);
      }
    });
  }

goBack() {
  this.prev.emit();
}

}
