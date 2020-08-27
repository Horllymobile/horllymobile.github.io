import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  quoteForm;
  constructor(private formBuilder: FormBuilder) {

    this.quoteForm = formBuilder.group({
      quote: ''
    });
   }

  @Output() qoute = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(quote){
    //console.log(quote)
    this.qoute.emit(quote);
    this.quoteForm.reset();
  }

}
