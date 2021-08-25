import * as UsersActions from '../actions/users.actions';
import {Users} from '../../models/users/users.model';

export interface State {
  user: Users[];
}

const initialState: State = {
  user: [
    {
      id: 1,
      firstName: 'Peter ',
      lastName: 'Mata',
      pn: '11111111111',
      email: 'PeterMata@gmail.com',
      country: 'usa',
      phone: '717-831-5811',
      gender: 'male',
    },
    {
      id: 2,
      firstName: 'Lisa',
      lastName: 'Evans',
      pn: '22222222222',
      email: 'LisaEvans@gmail.com',
      country: 'germany',
      phone: '716-655-5467',
      gender: 'female',
    },
    {
      id: 3,
      firstName: 'Bertha',
      lastName: 'Stewart',
      pn: '22222222222',
      email: 'Bertha@gmail.com',
      country: 'spain',
      phone: '735 982 547',
      gender: 'female',
    },
  ],
};

export function usersReducer(
  state: State = initialState,
  action: UsersActions.UsersActions
): State {
  switch (action.type) {
    case UsersActions.STORE_USER:
      return {
        ...state,
        user: [action.payload, ...state.user]
      };
    case UsersActions.EDIT_USER:
      const editedObject = state.user.map(e => {
        const item = e.id === action.payload.id;
        return item ? action.payload : e;
      });
      return {
        ...state,
        user: [...editedObject]
      };
    case UsersActions.DELETE_USER:
      return {
        ...state,
        user: state.user.filter(e => +e.id !== +action.payload)
      };
    default:
      return state;
  }
}


export const getUser = (state: State) => state.user;

