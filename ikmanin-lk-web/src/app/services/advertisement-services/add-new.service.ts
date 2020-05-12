import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Advertisement } from 'src/app/data-models/Advertisement';
import {Location} from 'src/app/data-models/Location';



@Injectable({
  providedIn: 'root'
})
export class AddNewService {
url: '';

  submitForm1(addnew: Advertisement){
  return this.http.post<any>(this.url, addnew);
  }

  submitFormlocation(addnew2: Location){
    return this.http.post<any>(this.url, addnew2);

  }

  constructor(private http : HttpClient) { }
}
