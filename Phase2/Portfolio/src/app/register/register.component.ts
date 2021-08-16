import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerRef = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }
  registerUser(){
    let register = this.registerRef.value;
    sessionStorage.setItem(register.user,register.pass);
    this.registerRef.reset();
  }
}
