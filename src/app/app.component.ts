import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from './login/login.component' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tests';
  navItem = [
    {name:"Products", route: '/products'},
    {name:"Cart", route: '/cart'},
    
    
  ]

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  goToProfile(){
    this._router.navigate(['./profilepage/'])
  }
  goToLogin(){
    this._router.navigate(['./login/'])
  }

}


