import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../Status-tarefa/tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }
  URL = 'http://localhost:3000/tarefa'


  criar(tarefa: Tarefa){
    return this.http.post<Tarefa[]>(this.URL, tarefa)
  }

  listar(){
    return this.http.get<Tarefa[]>(this.URL)
  }

  eliminar(id: number) {
    const url = `${this.URL}/${id}`
    return this.http.delete(url)
  }

  buscarPorId(id: number) {
    const url = `${this.URL}/${id}`
    return this.http.get(url)
  }

}
