import { Component, OnInit , Input} from '@angular/core';
import {User, Users} from '../../user';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  response: any;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.usersService.getUsers()
        .subscribe( users => this.users= users);



}
