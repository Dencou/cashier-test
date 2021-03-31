import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  constructor(private loginService: LoginService) { }
  


  Email:string;
  username: string;
  password: string;

  login(){
    this.loginService.Email = this.Email
    this.loginService.username = this.username;
    this.loginService.password = this.password;


  }

  ngOnInit(): void {
    
    
  }


}
