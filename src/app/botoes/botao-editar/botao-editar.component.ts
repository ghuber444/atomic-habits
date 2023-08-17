import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-botao-editar',
  templateUrl: './botao-editar.component.html',
  styleUrls: ['./botao-editar.component.css']
})
export class BotaoEditarComponent {

  constructor(private snackBar: MatSnackBar) {}


  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {duration: 2000})
  }

}
