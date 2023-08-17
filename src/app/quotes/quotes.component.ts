import { Component, OnInit } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { QuotesService } from '../services/quotes.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class QuotesComponent implements OnInit {

  constructor(private service: QuotesService, private http: HttpClient){}
  ngOnInit() {
    this.generateQuote()
  }
  QUOTE_URL = 'https://www.jcquotes.com/api/quotes/random';
  quotes: any;
  text:any

  generateQuote() {
    this.http.get(this.QUOTE_URL).subscribe((data:any) => {
      this.quotes = data.text
      console.log(this.quotes)
    })
  }
}
