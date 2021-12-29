import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../login.component';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {



  constructor(private loginService: LoginService, private productsService: ProductsService, private _router: Router) { }

  get usernameFromService(){
    return this.loginService.username
  }

  get userdata(){
    return this.loginService.password
  }


  ngOnInit(): void {   
  }


  blanceAdded = 0;
  updatedBalance = 0;
  username = this.loginService.username;
  password = this.loginService.password;
  oldpassword:string;


  get login(){
    return this.loginService.updatename(this.username);
  }
  get updatepassword(){
    return this.loginService.updatepassword(this.oldpassword,this.password)
  }

  



  pay(){
    if(this.actualbalance < this.totalSum){
      alert("You have no balance")
    }else if(this.totalSum == 0){
      alert("nothing to pay")
    }else{
      this.loginService.balance = this.actualbalance - this.totalSum
      this.productsService.clear()
    }

  
  
  }
  get selected(){
    return this.productsService.selected
  }

  AddFounds(){
    this.loginService.balance = Number(this.updatedBalance.toString())
    console.log("balance in service",this.loginService.balance)
    this._router.navigate(['./payment'])
    console.log(this.selected)

  }

  addBalances(){
    var balancex = this.blanceAdded + this.actualbalance
    console.log("holas",balancex)
    
    return balancex;
   
  }


 

  get totalSum() {
    return this.productsService.products.reduce((pre, cur) => pre + cur.total, 0);
  }

  get actualbalance(){
    return this.loginService.balance
  }

  

}


