import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../services/user.service';
import {User} from '../models/User'
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
id!:number;
user?: User = {
  id: 0,
  name: '',
  surname: '',
  country: '',
  telefon: 0,
  birthday: '',
  address: '',
};
  constructor(private _userService: UserService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
 this.id= Number(this.route.snapshot.paramMap.get('id'))

  if(this.id != 0) {
  this.user = this._userService.getUserById(this.id)
}
  }

  onSubmit(form: NgForm) {
    let user: User = {
      id: form.value.id,
      name: form.value.name,
      surname: form.value.surname,
      country: form.value.country,
      telefon: form.value.telefon,
      birthday: form.value.birthday,
      address: form.value.address,
    }

    this._userService.addUser(user)
    console.log(user)
  }

}
