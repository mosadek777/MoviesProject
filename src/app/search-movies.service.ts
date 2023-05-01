import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getSearch(keyword:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=e6aa68d67f588e047bb800641dcc2a2b&query=${keyword}&language=en-US&page=1&include_adult=false`)
  }
}
