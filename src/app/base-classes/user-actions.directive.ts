import {Directive, OnInit} from '@angular/core';
import {BaseComponentDirective} from '../base-component.directive';
import {Store} from '@ngrx/store';
import * as fromApp from '../../core/store/app.reducer';
import {take, takeUntil} from 'rxjs/operators';
import {Users} from '../../core/models/users/users.model';
import * as usersAction from '../../core/store/actions/users.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Directive()
export class UserActionsDirective extends BaseComponentDirective implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    pn: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    country: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });
  invalidFormSubmitted = false;
  users: Users[];
  selectedUser: Users;

  constructor(protected _store: Store<fromApp.AppState>,
              protected _activatedRoute: ActivatedRoute) {
    super();
  }


  ngOnInit(): void {
    this._store.select(fromApp.getUser)
      .pipe(
        take(1),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(res => {
        if (res) {
          this.users = res;

          const userId = +this._activatedRoute?.snapshot?.params['userId'];
          if (userId){
            this.selectedUser = this.users?.find(e => e.id === userId);
            if (this.selectedUser){
              this.form.patchValue({
                firstName: this.selectedUser.firstName,
                lastName: this.selectedUser.lastName,
                pn: this.selectedUser.pn,
                email: this.selectedUser.email,
                phone: this.selectedUser.phone,
                country: this.selectedUser.country,
                gender: this.selectedUser.gender
              });
            }
            else{
             alert('error: user not found');
            }
          }
        }
      });
  }

  save(action: 'add' | 'edit'): void{
    this.invalidFormSubmitted = false;

    for (let control in this.form.controls) {
      this.form.controls[control].markAsTouched();
    }

    if (!this.form.valid) {
      this.invalidFormSubmitted = true;
      return;
    }
    const model: Users = this.form.value as Users;
    model.id = this.selectedUser ? this.selectedUser.id : this.users.length + 1;

    if (action === 'add'){
      if (this.users.find(e => e.pn === model.pn)){
        alert('User with this personal number already exist');
        return;
      }
      this._store.dispatch(new usersAction.StoreUser(model));
    }
    else if(action === 'edit'){
      this._store.dispatch(new usersAction.EditUser(model));
    }
  }
}
