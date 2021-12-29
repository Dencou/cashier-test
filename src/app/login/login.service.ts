import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { User } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user:User[] = [...Array(1).fill(0).map((u,idx) => {
    return new User({
      username: this.username,
      email: this.Email,
      password: this.password,
    })
  })];

  

  constructor( private _router: Router) { }
  

  serviceee(e:string,u:string,p:string, l:boolean){
    this.Email = e;
    this.password = p;
    this.username= u;
    this.logged = l;

  }

  
  
  Email:string;
  username: string;
  password: string;
  logged:boolean;

  login(){
    const Email = this.Email
    const username = this.username;
    const password = this.password;
    const logged = this.logged;
    console.log('logged in', this.logged, 'iajsdoijas')

    alert("Thanks for Registr"+" " + username)
    
  }

  updatename(usernameprovided:string){
    this.username = usernameprovided;
  }
  updatepassword(oldpasswordprovided:string, newpasswordprovided:string){
    if(oldpasswordprovided != this.password){
      alert('the credentials mismatch')
    }else{
      this.password = newpasswordprovided;
    }
    
    
  }

  balance = 0; 

  sumatotal = 0;

  





  
  




}
