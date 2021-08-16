import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {
  contacts:Array<Contact>=[];
  constructor() { }

  ngOnInit(): void {
  }
  addContact(name:string,phoneNumber:string):void{
    let cont = new Contact(name,phoneNumber);
    this.contacts.push(cont);
  }
}
