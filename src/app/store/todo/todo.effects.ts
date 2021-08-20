import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as todoActions from './todo.actions';
import { catchError, concatAll, concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { concat, forkJoin, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Todo } from './todo.state';
import { fetchTodosFulfilled, fetchTodosRejected } from './todo.actions';
import { environment } from '../../../environments/environment';

@Injectable()
export class TodoEffects {
  fetchTodos$ = createEffect(() =>
    this.action$.pipe(
      ofType(todoActions.fetchTodos),
      switchMap(() => {
        this.store.dispatch(todoActions.fetchTodosPending());
        return this.http.get<Todo[]>(`${environment.apiUrl}/todos`).pipe(
          map((todos) => fetchTodosFulfilled({ todos })),
          catchError((err) => {
            let message = err instanceof HttpErrorResponse ? err.message : String(err);
            return of(fetchTodosRejected({ error: message }));
          })
        );
      })
    )
  );

  constructor(private action$: Actions, private store: Store, private http: HttpClient) {}
}
