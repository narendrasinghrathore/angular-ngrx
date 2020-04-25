import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getTodoList(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('/assets/data.json');
  }
}
