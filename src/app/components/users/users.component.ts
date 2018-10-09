import { Component, OnInit} from '@angular/core';
import {User} from '../../user';
//import service - access to Users api
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
    }

    //use users from api response
    getUsers(): void{
        this.usersService.getUsers()
            .subscribe( users => console.log(this.users = users = users));
    }


}
