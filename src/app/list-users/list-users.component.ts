import { Component, OnInit } from '@angular/core';
import {UserService } from '../services/user.service';
import {User} from '../models/User';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  user!: User[];

  constructor(private userService:UserService) {}
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
}
