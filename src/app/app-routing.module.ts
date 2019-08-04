import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './container/todo/todo.component';

const routes: Routes = [
  {
    path: 'todo', component: TodoComponent, pathMatch: 'full'
  },
  {
    path: 'list', component: TodoListComponent, pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'todo', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
