import { Component, OnInit } from '@angular/core';


import { Todo } from '../model/Todo';
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todoData: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
   // this.getTodos();
  }
/*
  getTodos(): void {
    this.todoService.getTodos().subscribe(todoData => this.todoData = todoData.slice(1,5));
  }
*/
}
