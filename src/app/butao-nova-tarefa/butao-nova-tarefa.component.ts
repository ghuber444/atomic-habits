import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesTarefaComponent } from '../Status-tarefa/detalhes-tarefa/detalhes-tarefa.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-butao-nova-tarefa',
  templateUrl: './butao-nova-tarefa.component.html',
  styleUrls: ['./butao-nova-tarefa.component.css']
})
export class ButaoNovaTarefaComponent {

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar ) { }

  openDialog(){
     this.dialog.open(DetalhesTarefaComponent, {
      height: '500px',
      width: '600px'
    })
    console.log(this.dialog)
  }
}
