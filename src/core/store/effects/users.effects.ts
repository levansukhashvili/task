import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import * as UsersActions from '../actions/users.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';


@Injectable()
export class UsersEffects {

  @Effect({dispatch: false})
  getUser$ = this._actions$.pipe(
    ofType(UsersActions.STORE_USER, UsersActions.EDIT_USER),
      map(res => {
        this._router.navigate(['']);
      }),
  );


  constructor(
    private _router: Router,
    private _actions$: Actions,
  ) {}

}
