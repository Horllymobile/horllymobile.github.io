import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    "The world is coming to an end one day",
    "There is always a complicated connection behind nice looking achivement",
    "When life give you many reasons to give up give it back the reason your have come so far"
  ];

  maxQoute = 10;
  constructor() { }

  ngOnInit(): void {
  }

  addNewQuote(value){
    if(+this.quotes.length >= +this.maxQoute){
      alert('You reach the limit delete qoute to before adding');
      return;
    }
    return this.quotes.push(value.quote);
  }
  deleteQuote(index){
    if(confirm("Are you sure")){
      this.quotes.splice(index,1);
    }
  }

}
