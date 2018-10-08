import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly urlApi = 'https://reqres.in/api/users/2';
  users: Observable<User[]>;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]>{
     return this.http.get<User[]>(this.urlApi);
  }
}
