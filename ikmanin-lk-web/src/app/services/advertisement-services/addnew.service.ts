import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advertisement} from 'src/app/data-models/Advertisement';


@Injectable({
  providedIn: 'root'
})
export class AddnewService {
  url =""

  constructor( private http : HttpClient) {
   }

  formsubmit( Advertisement : Advertisement ){
    this.http.post<any>(this.url, Advertisement).subscribe(
      data => console.log('Success!', data),
      error => console.log('Error!', error)
    );
  }
}
