import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;

  constructor() {
    this.isAuth = false;
  }

  /**
   * methode for sign in the user
   */
  signIn(): Promise<any> {
    return new Promise((res, rej) => {

      setTimeout(() => {
        this.isAuth = true;
        res();
      }, 500);
    });
  }


  /**
   * methode for sign out the user
   */
  signOut(): void {
    this.isAuth = false;
  }
}
