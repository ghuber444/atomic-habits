import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Status, Tarefa } from '../../Status-tarefa/tarefas';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-botao-eliminar',
  templateUrl: './botao-eliminar.component.html',
  styleUrls: ['./botao-eliminar.component.css']
})
export class BotaoEliminarComponent implements OnInit {

  @Input() id = 0;

  tarefa: any = {
    id: 0,
    nome: '',
    prioridade: '',
    descricao: '',
    prazo: '',
    status: Status.PorFazer
  }

  tarefaParaEliminar = 0;

  constructor(
    private service: TarefaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    console.log(this.id);
    this.service.buscarPorId(this.id).subscribe((tarefa) => {
      this.tarefa = tarefa
      console.log("Hey:", this.tarefa);
    })
  }

  eliminarTarefa() {
    if(this.tarefa.id) {
      this.service.eliminar(this.tarefa.id).subscribe()
      window.location.reload()
      this.snackBar.open('Tarefa eliminada', 'Fechar')
    }

  }

}
