import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // Removed the incorrect 'routes' definition from here. Routes should be defined in the app-routing.module.ts
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    // Initialize the login form
    this.loginForm = this.fb.group({
      username: ['', Validators.required],  // Username is required
      password: ['', Validators.required]   // Password is required
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // Get the form values
    const formValues = this.loginForm.value;

    const validUsername = 'admin';  // Replace this with actual validation logic
    const validPassword = 'password';  // Replace this with actual validation logic

    if (formValues.username === validUsername && formValues.password === validPassword) {
      console.log('Login successful!');
      alert('Login successful');
      // Navigate to home component upon successful login
      this.router.navigate(['cards-site']);
    } else {
      console.log('Login failed!');
      this.loginError = true;  // Show an error message
    }
  }
}
