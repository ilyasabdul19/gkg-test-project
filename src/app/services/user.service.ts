import { Injectable } from '@angular/core';
import {User} from '../models/User';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'ilyas',
      surname: 'abdul',
      country: 'somaila',
      telefon: 90553345665,
      birthday: '10.10.1990',
      address: "pazarbasi sokak istanbul"
    },
    {
      id: 2,
      name: 'ilya',
      surname: 'abdul',
      country: 'somaila',
      telefon: 90553345665,
      birthday: '10.10.1998',
      address: "pazarbasi sokak istanbul"
    }
  ];
  constructor() { }
  ngOnInit(): void {
    console.log(this.users)
  }

  getUser() {
    return this.users
  }

  addUser(user : User) {
    this.users.push(user);
  }

  getUserById(id :number) {
return this.users.find(x=> x.id === id);
  }
  
}

