import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  showLogin:boolean=true;
  showRegistration:boolean=false;
  showPortfolio:boolean=false;
  user:string="";
  constructor() {
   }

  ngOnInit(): void {

  }
  checkUser(){
    let login = this.loginRef.value;
    this.user=login.user;
    if(sessionStorage[login.user]){
      if(sessionStorage.getItem(login.user) == login.pass){
        this.togglePortfolio();
      }
      else{
        alert("Incorrect User or Pass");
      }
    }
    else{
      alert("Incorrect User or Pass");
    }
  }
  togglePortfolio(){
    this.showLogin=false;
    this.showRegistration=false;
    this.showPortfolio=true;
  }
  toggleLogin(){
    this.showLogin=true;
    this.showRegistration=false;
    this.showPortfolio=false;
  }
  toggleRegistration(){
    this.showLogin=false;
    this.showRegistration=true;
    this.showPortfolio=false;
  }
}
