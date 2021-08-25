import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../core/services/users.service';
import {Posts} from '../../../core/models/users/posts.model';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Posts[] = [];
  isLoading = true;

  constructor(private _usersService: UsersService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._usersService.getPosts(+this._activatedRoute?.snapshot?.params['user'])
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(res => {
        if (res){
          this.posts = res;
        }
      });
  }

}
