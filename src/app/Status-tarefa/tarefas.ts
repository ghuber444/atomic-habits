export interface Tarefa {
  id: number
  nome: string
  prioridade: string
  descricao: string
  prazo: string
  status: Status
}

export enum Status {
  PorFazer = 1,
  EmProgresso = 2,
  Terminado = 3
}
