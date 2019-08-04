import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from '../../models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input()
  list$: Observable<ITodo[]>;

  constructor() { }

  ngOnInit() {

  }

}
