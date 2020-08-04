import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  authenticateUser(username: string, password: string){
    console.log("Authservice:: ");
  }
}
