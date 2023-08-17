import {Component} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Status } from '../tarefas';
import { FormsModule } from '@angular/forms';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

/** @title Simple form field */
@Component({
  selector: 'app-detalhes-tarefa',
  templateUrl: './detalhes-tarefa.component.html',
  styleUrls: ['./detalhes-tarefa.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule
  ],
})
export class DetalhesTarefaComponent {
  constructor(private tarefaService: TarefaService,
              private dialog: Dialog,
              private snackBar: MatSnackBar
            ) {}
  minDate = new Date()

  myFormControl ='';
  value ='';

  tarefa = {
    id: 0,
    nome: '',
    prioridade: this.myFormControl,
    descricao: '',
    prazo: '',
    status: Status.PorFazer
  }

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action)
  }

  criarTarefa(){
    this.tarefaService.criar(this.tarefa).subscribe(() => {
      this.dialog.closeAll();
      window.location.reload();
      setTimeout(() => {
        this.openSnackBar('Nova tarefa', 'Fechar'), 500
      })
    });


  }

}
