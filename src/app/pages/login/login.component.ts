import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario:string;
  password:string;

  constructor(){
    this.usuario = '';
    this.password = '';
  }

  login(): void {
    alert(this.usuario);
  }
}
