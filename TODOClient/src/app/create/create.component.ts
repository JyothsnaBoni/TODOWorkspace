import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';

import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {



  Todo: Todo = {
    id : 1 ,
 subject: 'new Todo',
 status:  'open',
 created: '-',
 modified:'-',
 category:'unknown'
  }


 
  constructor() {
       
   }

  ngOnInit() {
  }


}


