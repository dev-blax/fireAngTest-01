import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  loginForm: any = '';

  constructor(private auth: AuthService){}

  login(){
    if(this.email == '' || this.password == ''){
      alert('fill all inputs');
      return;
    }

    this.auth.login(this.email, this.password);
    
  }


}
