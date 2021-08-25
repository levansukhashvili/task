import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../core/store/app.reducer';
import {UserActionsDirective} from '../../base-classes/user-actions.directive';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent extends UserActionsDirective {

  constructor(protected _store: Store<fromApp.AppState>,
              protected _activatedRoute: ActivatedRoute) {
    super(_store, _activatedRoute);
  }

}
