import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuotesComponent } from './quotes/quotes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atomic-habits';

  constructor(private dialog: MatDialog){}

openCadastroDialog() {
  this.dialog.open(QuotesComponent, {
    width:'800px',
    height:'500px'
  })
}}
