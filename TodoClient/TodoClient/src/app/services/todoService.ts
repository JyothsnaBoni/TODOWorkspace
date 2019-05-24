import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Todo } from '../model/Todo';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  

  addTodo(todo: Todo){

    const form = new FormData;

    // form.append('subject', this.todo.subject);

    //take the body variables assign to an object and return that todo object
    return this.http.post('localhost:3000/Todo/create',form)
     
  }



  /** DELETE: delete the todo from the server */
  deleteTodo (subject: string): Observable<{}> {
   
    return this.http.delete('localhost:3000/Todo/'+ 'subject');
    
  }


  updateTodo(todo: Todo){

    const form = new FormData;
    //take subject name input from the list, return the subject
    return this.http.post('localhost:3000/Todo/'+ 'subject', form);
  }

  todoList(){
    //take the list of todo and return the list
    return this.http.get('localhost:3000/Todo');

  }

  

/*
  setCreatedDate(): Observable<string> {
    return of(new Date().toLocaleString());
  }
*/

//need to edit the following code
/*
searchTodos(term: string): Observable<Todo[]> {
  term = term.trim();

  // Add safe, URL encoded search parameter if there is a search term
  const options = term ?
   { params: new HttpParams().set('name', term) } : {};

  return this.http.get<Todo[]>(this.heroesUrl, options)
    .pipe(
      catchError(this.handleError<Todo[]>('searchHeroes', []))
    );
}
 */


 
 
}