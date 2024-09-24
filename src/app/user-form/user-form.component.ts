import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;
  isSubmitted:boolean=false
  courses =['Mathematics','Chemistry','Biology','Analytics']

  constructor(
    private fb: FormBuilder,
    private router:Router

    
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: ['', [Validators.required]],
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid && !this.isSubmitted) {
      console.log(this.userForm.value);
      this.isSubmitted=true
    } else {
      this.userForm.markAllAsTouched();  // Mark all controls as touched to show validation errors
      alert('The form has already been submitted,try some different values')
       alert('stop this repetition')
    
      console.log('The form has already been submitted')
    }
  }

  get id() { return this.userForm.get('id')!; }
  get firstname() { return this.userForm.get('firstname')!; }
  get lastname() { return this.userForm.get('lastname')!; }
  get email() { return this.userForm.get('email')!; }
  get phoneNumber() { return this.userForm.get('phoneNumber')!; }
  get age() { return this.userForm.get('age')!; }

navigateToTable(){
  this.router.navigate(['cards-site'])
}
navigateToCards(){
  this.router.navigate(['table-site'])
}
reloadPage(){
  window.location.reload();
}
}