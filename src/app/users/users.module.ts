import { NgModule } from '@angular/core';
import {UsersComponent} from './users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersService} from '../../core/services/users.service';
import {SharedModule} from '../shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    UsersComponent,
    DashboardComponent,
    AddUserComponent,
    EditUserComponent,
    PostsComponent,
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
  ],
  providers: [
    UsersService
  ],
  bootstrap: []
})
export class UsersModule { }
