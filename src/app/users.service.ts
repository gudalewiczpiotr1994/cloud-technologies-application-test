import { Injectable } from '@angular/core';
//import which create an access to the api
import {HttpClient} from '@angular/common/http';
import {User} from './user';
//import needed to convert ajax from the api
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //find url to the api
  readonly urlApi = 'https://reqres.in/api/users?page=2';
  //variable contains users from api response
  users: Observable<User[]>;

  constructor(private http: HttpClient) {}

  //please request from the api
  getUsers(): Observable<User[]>{
     return this.http.get<User[]>(this.urlApi);
  }


}
