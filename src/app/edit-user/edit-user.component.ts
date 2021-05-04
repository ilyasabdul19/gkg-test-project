import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';
import {User} from '../models/User'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user?: User = {
    id: 0,
    name: '',
    surname: '',
    country: '',
    telefon: 0,
    birthday: '',
    address: '',
  };
  constructor(private route: ActivatedRoute , private userService: UserService) { }

  ngOnInit(): void {
  }

  getUser() {
  }

}
