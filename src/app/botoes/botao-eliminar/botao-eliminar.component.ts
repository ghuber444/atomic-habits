import { Component, OnInit } from '@angular/core';
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
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa
      console.log("Hey"+id)
    })
  }

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {duration: 2000})
  }

  eliminarTarefa() {
    this.tarefaParaEliminar = this.tarefa.id
    if(this.tarefa.id) {
      this.service.eliminar(this.tarefa.id).subscribe()
    }

  }

}
