import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  userForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.router.url == '/add') {
      this.userForm = this.fb.group({
        id: [1],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        isActive: [true],
      });
    } else {
      this.id = this.activatedRoute.snapshot.params['id'];
      const aaa = localStorage.getItem('userlist');

      if (aaa !== null) {
        try {
          let user = JSON.parse(aaa);
          this.userForm = this.fb.group({
            id: [user[this.id].id],
            name: [user[this.id].name, Validators.required],
            email: [
              user[this.id].email,
              [Validators.required, Validators.email],
            ],
            password: [
              user[this.id].password,
              [Validators.required, Validators.minLength(8)],
            ],
            confirmPassword: [
              user[this.id].confirmPassword,
              Validators.required,
            ],
            isActive: [user[this.id].isActive],
          });
        } catch (error) {
          console.error('Error parsing userlist from localStorage:', error);
          // Handle the parsing error appropriately, e.g., set a default value for this.userlist
        }
      } else {
        // Handle the case when 'userlist' doesn't exist in localStorage
      }
    }
    console.log(this.router.url);
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      // Add user to local storage
      const users = JSON.parse(localStorage.getItem('userlist') || '[]');
      if (this.id != null) {
        users[this.id]=this.userForm.value
      }else{
        const newid = users.length > 0 ?users[users.length-1].id : 0;
        this.userForm.patchValue({ id: newid + 1 });
        users.push(this.userForm.value);
      }
      
      localStorage.setItem('userlist', JSON.stringify(users));

      // Clear form after submission
      this.router.navigate(['/users']);

    }
  }
}
