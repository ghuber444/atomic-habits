import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { MatDialog } from '@angular/material/dialog';
import { QuotesComponent } from '../quotes/quotes.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public dialog: MatDialog) { }


  openAboutDialog() {
    this.dialog.open(AboutComponent, {
        width:'800px',
        height:'500px'
      });
  }

  openQuoteDialog() {
    this.dialog.open(QuotesComponent, {
      width:'700px',
      height:'250px'
    })
}

}
