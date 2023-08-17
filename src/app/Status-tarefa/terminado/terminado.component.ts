import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas';
import { TarefaService } from 'src/app/services/tarefa.service';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-terminado',
  templateUrl: './terminado.component.html',
  styleUrls: ['./terminado.component.css']
})
export class TerminadoComponent implements OnInit {

  constructor( private tarefaService: TarefaService) { }


  listaTarefas: Array<Tarefa> = [];
  tarefa!: any;

  ngOnInit(): void {
    this.listarTarefa()
    console.log(this.listaTarefas)
  }


  criarTarefa(){
    this.tarefaService.criar(this.tarefa).subscribe()
  }

  listarTarefa(){
    this.tarefaService.listar().subscribe((data: any) => {
      this.listaTarefas = data.filter((tarefa: { status: string; }) => tarefa.status === '2');
      console.log(this.listaTarefas)
    })
  }
}
