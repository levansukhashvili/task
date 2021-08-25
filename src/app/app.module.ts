import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared.module';
import {StoreModule} from '@ngrx/store';
import * as fromApp from '../core/store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from '../core/store/effects/users.effects';
import {PhotosComponent} from './photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([UsersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
