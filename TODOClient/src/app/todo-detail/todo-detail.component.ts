import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService } from '../services/todo.service'

import { Todo } from '../model/Todo';



@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  
  @Input() Todo: Todo;



  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }


}
