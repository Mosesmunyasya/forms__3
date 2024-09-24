import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-site',
  templateUrl: './table-site.component.html',
  styleUrls: ['./table-site.component.css']
})
export class TableSiteComponent implements OnInit {
  userForm: FormGroup;
  users: any [] = [];

  constructor(
    private router:Router,
    private fb:FormBuilder

  ) { 

 
// goBack(){
//   this.router.navigate(['table-site'])
// }
// constructor(private fb: FormBuilder) {
  // Initialize the form
  this.userForm = this.fb.group({
    name: ['', Validators.required],
    idnumber: ['', Validators.required],
    tel: ['', Validators.required]
  });
}

// Submit form and add data to the users array
onSubmit() {
  if (this.userForm.valid) {
    this.users.push(this.userForm.value);  // Add the form data to the users array
    this.userForm.reset();  // Clear the form
  }
}
ngOnInit(): void {
}
goBack(){
  this.router.navigate(['cards-site'])
}
}
