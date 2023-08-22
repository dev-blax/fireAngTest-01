import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  password: string = '';

  loading: boolean = false;


  constructor(private auth: AuthService){}

  async register(){
    if(this.email == '', this.password == ''){
      alert('fill all inputs');
      return;
    }
    // alert('email '+ this.email)

    this.loading = true;

    await this.auth.register(this.email, this.password)

    this.loading = false;

    this.email = '';
    this.password = '';

  }

}
