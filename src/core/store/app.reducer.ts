import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUsers from './reducers/users.reducer';

export interface AppState {
  users: fromUsers.State
}

export const appReducer: ActionReducerMap<AppState, any> = {
  users: fromUsers.usersReducer,
};


export const getUsersState = createFeatureSelector<fromUsers.State>('users');
export const getUser = createSelector(getUsersState, fromUsers.getUser);


