import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserActionsDirective} from '../../base-classes/user-actions.directive';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../core/store/app.reducer';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent extends UserActionsDirective {

  constructor(protected _store: Store<fromApp.AppState>,
              protected _activatedRoute: ActivatedRoute) {
    super(_store, _activatedRoute);
  }

}
