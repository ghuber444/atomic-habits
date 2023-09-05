import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalEdicaoComponent } from 'src/app/Status-tarefa/modal-edicao/modal-edicao.component';
import { Status } from 'src/app/Status-tarefa/tarefas';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-botao-editar',
  templateUrl: './botao-editar.component.html',
  styleUrls: ['./botao-editar.component.css']
})
export class BotaoEditarComponent {


  @Input() id = 0;

  tarefa: any = {
    id: 0,
    nome: '',
    prioridade: '',
    descricao: '',
    prazo: '',
    status: Status.PorFazer
  }

  constructor(
    private tarefaService: TarefaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log('Dados recebidos'+this.id);
    this.tarefaService.buscarPorId(this.id).subscribe((tarefa) => {
      this.tarefa = tarefa
      console.log("Dados recebidos:", this.tarefa);
    })
  }

  openDialog(){
    this.dialog.open(ModalEdicaoComponent, {
      width: '600px',
    })
  }
}
