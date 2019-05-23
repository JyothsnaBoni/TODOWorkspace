import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Todo } from '../model/Todo';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }


  addTodo(todo: Todo){

    const form = new FormData;

    // form.append('subject', this.todo.subject);

    //take the body variables assign to an object and return that todo object
    return this.http.post('localhost:3000/createTodo',form)
     
  }

  deleteTodo(subject){
     //take subject name input from the list, return the subject
      return this.http.delete('localhost:3000/deleteTodo'+ 'subject');;

  }

  updateTodo(todo: Todo){

    const form = new FormData;
    //take subject name input from the list, return the subject
    return this.http.post('localhost:3000/updateTodo'+ 'subject', form);
  }

  todoList(){
    //take the list of todo and return the list
    return this.http.get('localhost:3000/todoList');

  }

/*
  setCreatedDate(): Observable<string> {
    return of(new Date().toLocaleString());
  }
*/

 
 
 
}