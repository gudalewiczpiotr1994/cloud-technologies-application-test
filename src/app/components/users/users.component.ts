import { Component, OnInit} from '@angular/core';
import {User} from '../../user';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }

  getUsers(): void{
    this.usersService.getUsers()
        .subscribe( users => console.log(this.users = users));
  }


}
