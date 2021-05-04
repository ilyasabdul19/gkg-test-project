import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ListUsersComponent} from './list-users/list-users.component'
import {EditUserComponent} from './edit-user/edit-user.component'
import {CreateUserComponent} from './create-user/create-user.component'

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent
  },
  {
    path: 'add-user',
    component: CreateUserComponent
  },
  {
    path: 'user/edit/:id',
    component: EditUserComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
