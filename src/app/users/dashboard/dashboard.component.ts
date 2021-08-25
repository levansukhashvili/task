import {Component, OnInit} from '@angular/core';
import {BaseComponentDirective} from '../../base-component.directive';
import {Users} from '../../../core/models/users/users.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../core/store/app.reducer';
import * as usersAction from '../../../core/store/actions/users.actions';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponentDirective implements OnInit {
  users: Users[];
  filteredUsers: Users[];

  constructor(private _store: Store<fromApp.AppState>) {
    super();
  }

  ngOnInit(): void {
    this._store.select(fromApp.getUser)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(res => {
      if (res) {
        this.users = res;
        this.filteredUsers = this.users
      }
    });
  }

  trackBy(index, item) {
    return item.id;
  }

  filter(value: any): void{
    value = value.target.value.toLowerCase();
    this.filteredUsers = this.users.filter(e => e.firstName.toLowerCase().trim().includes(value) || e.lastName.toLowerCase().trim().includes(value));

    if (!this.filteredUsers && !value){
      this.filteredUsers = this.users;
    }
  }

  deleteUser(id: number): void {
    this._store.dispatch(new usersAction.DeleteUser(id));
  }

}
