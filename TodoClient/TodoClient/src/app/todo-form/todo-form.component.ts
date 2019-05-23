import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FormControl, FormBuilder } from '@angular/forms';
import { Todo } from '../model/Todo';
import { TodoService } from '../services/todoService';
import { getLocaleDateTimeFormat } from '@angular/common';


const modifiedDate: string= '-';


@Component({
  selector: 'app-todo-form', 
  templateUrl: './todo-form.component.html',
  
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  // TodoForm = this.form.group({
  //   subject: [''],
  //   status: [''],
  //   created: [''],
  //   modified: [''],
  //   category: ['']
  //   });
  todo: any = {};

  // @ViewChild('f') todoForm: string;
    currentDate: string

  constructor(private form: FormBuilder,
    private todoService: TodoService) { 
    

    }


  ngOnInit() {
      
  }

  onSubmit() {

      console.log(this.todo);
    // this.todoService.addTodo(this.TodoForm.value);
  }







}
