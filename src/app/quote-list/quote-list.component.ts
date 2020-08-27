import { Component, EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotesArray: any;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() quoteIndex = new EventEmitter();

  deleteQuote(index){
    this.quoteIndex.emit(index);
  }

}
