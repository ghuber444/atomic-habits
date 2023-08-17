import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from '../tarefas';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-por-fazer',
  templateUrl: './por-fazer.component.html',
  styleUrls: ['./por-fazer.component.css']
})
export class PorFazerComponent implements OnInit {

  constructor(private service: QuotesService, private tarefaService: TarefaService) { }


  listaTarefas: Array<Tarefa> = [];
  tarefa!: any;
  ngOnInit(): void {
    this.listarTarefa()
    console.log(this.listaTarefas)
  }
  generateRandomQuote(){
    this.service.generateQuote()
  }

  criarTarefa(){
    this.tarefaService.criar(this.tarefa).subscribe()
  }

  listarTarefa(){
    this.tarefaService.listar().subscribe((data: any[]) => {
      console.log(data);
      this.listaTarefas = data.filter((tarefa) => tarefa.status === 1);
      // this.listaTarefas = data.filter((tarefa) => tarefa.status === 'por-fazer');

    })
  }

//   mudarStatus() {
//      this.tarefa.status = Status.EmProgresso
//     //  this.listaTarefas = this.tarefa.status
//      console.log(this.tarefa.status)
// }
}
