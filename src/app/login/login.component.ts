import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { LoginService } from './login.service';



export class User{
  name:string;
  email:string;
  password:string;


  constructor(data:any){

    this.email = data.email;
    this.name = data.name;
    this.password = data.password

  }

}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService, private _router:Router) { }
  

  Email:string;
  username: string;
  password: string;
  newpassword:string;
  logged:boolean;

  get serviceee(){
    return this.loginService.serviceee(this.Email,this.username,this.password,this.logged)
  }

  login(){
    this.loginService.Email = this.Email
    this.loginService.username = this.username;
    this.loginService.password = this.password;
    this.logged = true;
    console.log('logged in', this.logged)


    this._router.navigate(['profilepage'])
    alert('Registrado con exito!')
    return this.loginService.serviceee(this.Email,this.username,this.password,this.logged)


  }

  ngOnInit(): void {
    
    
  }


}
