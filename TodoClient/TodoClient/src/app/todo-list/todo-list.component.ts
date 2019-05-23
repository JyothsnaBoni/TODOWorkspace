import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todoService';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService : TodoService) { }

  ngOnInit() {
  }

  getTodoList(){
    return this.todoService.todoList()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
