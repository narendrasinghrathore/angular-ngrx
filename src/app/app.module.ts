import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './container/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtooldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
