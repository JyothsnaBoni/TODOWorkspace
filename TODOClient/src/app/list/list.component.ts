import { Component, OnInit } from '@angular/core';

import { Todo } from '../model/Todo';
import {todoData} from '../model/TodoData';


import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  TodoData: Todo[];
  selectedTodo: Todo; 

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoAll();
  }


onSelect(Todo: Todo): void {
  this.selectedTodo = Todo;
}

getTodoAll(): void {
  this.todoService.getTodoAll().subscribe(todoData => this.TodoData = todoData);
}



  }



