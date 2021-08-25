import {Component, OnInit} from '@angular/core';
import {Photos} from '../../core/models/photos/photos.model';
import {PhotosService} from '../../core/services/photos.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit{
  photos: Photos[];
  isLoading = true;

  constructor(private _photosService: PhotosService) {

  }

  ngOnInit(): void {
    this._photosService.getPhotos()
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(res => {
      if (res){
        this.photos = res;
      }
    })
  }
}
