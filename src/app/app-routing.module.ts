// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { SigninComponent } from './auth/signin/signin.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { AddEditComponent } from './users/add-edit/add-edit.component';

// const routes: Routes = [
//   { path: 'signin', component: SigninComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'users/add', component: AddEditComponent },
//   { path: 'users/edit/:id', component: AddEditComponent },
//   { path: '', redirectTo: '/signin', pathMatch: 'full' },
//   { path: '**', redirectTo: '/signin' },
//   { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }







// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { SigninComponent } from './auth/signin/signin.component';
// import { SignupComponent } from './auth/signup/signup.component';

// const routes: Routes = [
//   { path: 'signin', component: SigninComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: '', redirectTo: '/signin', pathMatch: 'full' },
//   { path: '**', redirectTo: '/signin' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersListComponent } from './users/users-list/users-list.component'; // Import the UsersListComponent
import { AddEditComponent } from './users/add-edit/add-edit.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UsersListComponent }, 
  { path: 'add', component: AddEditComponent }, 
  { path: 'edit/:id', component: AddEditComponent }, 
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: '**', redirectTo: '/signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
