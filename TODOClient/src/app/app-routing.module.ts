
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent} from '../app/list/list.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TodoDetailComponent }  from './todo-detail/todo-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todoData', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
