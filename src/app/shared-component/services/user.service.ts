import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject = new BehaviorSubject<string>('admin');
  currentUser$ = this.currentUserSubject.asObservable();

  changeUser(value: number) {
    let newUser: any;
    if (value == 1) {
      newUser = 'admin';
    } else if (value == 2) {
      newUser = 'user';
    } else if (value == 3) {
      newUser = 'lineManager'
    }
    this.currentUserSubject.next(newUser);
    console.log(`User changed to ${newUser}`);
  }

  constructor() { }
}
