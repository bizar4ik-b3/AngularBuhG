import { Injectable } from '@angular/core';
import {Response ,Http} from '@angular/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient:Http) {
  }
  getUserByEmail(email:string):Observable<User> {
    // tslint:disable-next-line: no-unused-expression
    return this.httpclient.get(`http://localhost:3000/users?email=${email}`)
      .map((response: Response) => response.json())
      .map((user:User[])=>user[0] ? user[0] : undefined);
  }
  createNewUser(user:User):Observable<User> {
    return this.httpclient.post(`http://localhost:3000/users`, user)
      .map((response: Response) =>  response.json());

  }
}

