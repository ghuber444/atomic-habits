import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tarefa } from 'src/app/Status-tarefa/tarefas';

@Component({
  selector: 'app-botao-comecar',
  templateUrl: './botao-comecar.component.html',
  styleUrls: ['./botao-comecar.component.css']
})
export class BotaoComecarComponent {

  constructor(private snackBar: MatSnackBar) {}

  listaTarefas: Array<Tarefa> = [];
  tarefa!:any;

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {duration: 2000})
  }


  comecarTarefa() {
    console.log('começar')
  }
}
