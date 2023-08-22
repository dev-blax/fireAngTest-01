import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string){
     this.fireAuth.signInWithEmailAndPassword(email, password)
     .then(()=>{
       localStorage.setItem('token', 'true' );
       this.router.navigate(['dashboard']);
       alert('login success')
     },
     err =>{
      alert('login error '+ err)
    }
    )
  }

  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
      alert('registration success');
      this.router.navigate(['login']);
    },
    err =>{
      alert('registration failed '+ ' '+ email+ err );
    }
    )
  }

  logout(){
    alert('logout working')
  }



}
