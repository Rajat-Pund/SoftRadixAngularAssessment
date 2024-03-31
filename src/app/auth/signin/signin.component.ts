import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;
  email: string = '';
    password: string = '';

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(): void {
    const email = this.signInForm.get('email')?.value || '';
    const password = this.signInForm.get('password')?.value || '';
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log('Stored User:', user);
      console.log('Input Email:', email);
      console.log('Input Password:',  password);
      if (user.email ===  email && user.password === password) {
        // Authentication successful, redirect to users module
        this.router.navigate(['/users']);
      } else {
        console.log('Invalid email or password');
        alert('Invalid email or password');
      }
    } else {
      console.log('User not found. Please sign up.');
      alert('User not found. Please sign up.');
    }
  }

}
