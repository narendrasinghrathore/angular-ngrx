import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { getAllTodos } from '../../store/selectors/todo.selector';
import { Observable } from 'rxjs';
import { ITodo, ITodoStatus } from 'src/app/models/todo.model';
import { ChangeDetectionStrategy } from '@angular/core';
import * as  TodoActions from '../../store/actions/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  list: Observable<ITodo[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.list = this.store
      .pipe(select(getAllTodos));

    setTimeout(() => {
      this.store.dispatch(
        TodoActions
          .ADD_TODO(
            {
              name: 'Todo action',
              date: new Date(),
              status: ITodoStatus.inprogress
            }));
    }, 2000);
  }
}
