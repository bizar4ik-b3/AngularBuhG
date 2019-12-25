import { Injectable } from '@angular/core';
import {Response ,Http} from '@angular/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { BaseApi } from '../core/base-api';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseApi {

  constructor(public httpclient: Http) {
    super(httpclient);
  }
  // getUserByEmail(email:string):Observable<User> {
  //   // tslint:disable-next-line: no-unused-expression
  //   return this.httpclient.get(`http://localhost:3000/users?email=${email}`)
  //     .map((response: Response) => response.json())
  //     .map((user:User[])=>user[0] ? user[0] : undefined);
  // }

  getUserByEmail(email:string):Observable<User> {
    // tslint:disable-next-line: no-unused-expression
    return this.get(`/users?email=${email}`).map((user:User[])=>user[0] ? user[0] : undefined);
  }

  createNewUser(user:User):Observable<User> {
    return this.post('/users',user);
  }
}
