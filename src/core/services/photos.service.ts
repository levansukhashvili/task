import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Photos} from '../models/photos/photos.model';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private _http: HttpClient) {}

  // GET
  getPhotos(): Observable<Photos[]>{
    return this._http.get<Photos[]>(this.baseUrl + `/photos`);
  }


}
