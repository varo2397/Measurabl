import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { map, Observable, zip } from 'rxjs';
import { User, UserAge, UserCompleteName } from '../core/models/user';
import {chain} from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUsersNames(): Observable<UserCompleteName[]> {
    return this.apiService.get('/names')
  }

  getUsersAge(): Observable<UserAge[]> {
    return this.apiService.get('/ages')
  }

  getUsers() {
    const userNames$ = this.getUsersNames();
    const userAges$ = this.getUsersAge();
    return zip(userAges$, userNames$).pipe(map(([usersAge, usersNames]) => chain([...usersAge, ...usersNames]).groupBy('id').map((values) => ({...values[0], ...values[1]})).value()))
  }

}
