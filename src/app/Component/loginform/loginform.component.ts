import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {
loginForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router
  ,private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;

    }
    this.navigateToEmployeePage();
    this.loading = true;
    //api binding code here
    this.errorMessage = '';

    // const body = this.loginForm.value;

    // this.authService.login(body).subscribe({
    //   next: (response) => {
    //     console.log('Login successful', response);
      
    //     // Handle successful login, e.g., store token, navigate, etc.
    //     this.navigateToEmployeePage();
    //   },
    //   error: (error) => {
    //     console.error('Login failed', error);
    //     this.errorMessage = 'Invalid email or password.';
    //     this.loading = false;
    //   }
    // });
  }

  navigateToEmployeePage() {

      this.loading = false;

      // ✅ Navigate to employee page
      this.router.navigate(['/Detailsforms']);
      

  }
}
