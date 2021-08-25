import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Posts} from '../models/users/posts.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private _http: HttpClient) {}

  // GET
  getPosts(userId: number): Observable<Posts[]>{
    return this._http.get<Posts[]>(this.baseUrl + `/posts?userId=${userId}`);
  }


}
