import {Users} from '../../models/users/users.model';
import {Action} from '@ngrx/store';


export const STORE_USER = '[Users] Store User';
export const EDIT_USER = '[Users] Edit User';
export const DELETE_USER = '[Users] Delete User';

export class StoreUser implements Action {
  readonly type = STORE_USER;

  constructor(public payload: Users) {
  }
}

export class EditUser implements Action {
  readonly type = EDIT_USER;

  constructor(public payload: Users) {
  }
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: number) {
  }
}


export type UsersActions = StoreUser
  | EditUser
  | DeleteUser;
