import { Component, OnInit } from '@angular/core';


interface Tarefa {
  id: number;
  nome: string;
  concluida: boolean;
}

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [
    { id: 1, nome: 'Estudar Angular', concluida: false },
    { id: 2, nome: 'Fazer compras', concluida: false },
    { id: 3, nome: 'Lavar roupa', concluida: true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleConcluida(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }

  excluirTarefa(id: number): void {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }
}
