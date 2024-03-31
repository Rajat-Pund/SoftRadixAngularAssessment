import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  userlist!: any[];

  constructor(private router: Router) {}

 
  ngOnInit(): void {

    // Load users from local storage
    const userlistItem = localStorage.getItem('userlist');
    if (userlistItem == 'undefined' || userlistItem == null) {
      localStorage.setItem('userlist', '[]');
    }
    const aaa = localStorage.getItem('userlist');

    if (aaa !== null) {
      try {
        this.userlist = JSON.parse(aaa);
      } catch (error) {
        console.error('Error parsing userlist from localStorage:', error);
        // Handle the parsing error appropriately, e.g., set a default value for this.userlist
      }
    } else {
      console.log( 'does not exist in localStorage');
    }
  }


  addUser(){
     this.router.navigate(['/add']);
  }


  editUser(index: number): void {
    this.router.navigate(['/edit',index]);
  }

  deleteUser(index: number): void {
    if (confirm('Are you sure you want to delete the user?')) {
      this.userlist.splice(index, 1);
      localStorage.setItem('userlist', JSON.stringify(this.userlist));
    }
  }

  toggleActivation(index: number): void {
     const user = this.userlist[index];
    const action = user.isActive ? 'deactivate' : 'activate';
    if (confirm(`Are you sure you want to ${action} the user?`)) {
      user.isActive = !user.isActive;
      localStorage.setItem('userlist', JSON.stringify(this.userlist));
    }
  }
}
