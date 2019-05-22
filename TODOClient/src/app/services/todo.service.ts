import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Todo } from '../model/Todo';
import { todoData } from '../model/TodoData';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private messageService: MessageService) { }


  // to return the complete todo list  
  getTodoAll(): Observable<Todo[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('todoService: fetched all TOdos');
    return of(todoData);
  }

 
  //fetch a particular todo
  getSelectedTodos(id: number): Observable<Todo>{
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('todoService: fetched Todos id=$(id)');
   return of(todoData.find(Todo => Todo.id === id));
  
  }

  
 
}
