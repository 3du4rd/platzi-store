import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth
  ) { }

  createUser(email: string, password:string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
}
