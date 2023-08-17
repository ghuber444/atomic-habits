import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  QUOTE_URL = 'https://www.jcquotes.com/api/quotes/random';

  constructor(private http: HttpClient) { }

  quotes: any;
  text:any

  generateQuote() {
    this.http.get(this.QUOTE_URL).subscribe((data:any) => {
      this.quotes = data.text
      console.log(this.quotes)
    })
  }
}
