import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _http:HttpClient) { }
  getTrending(mediaType:any,pageNum:any):Observable<any>{
return this._http.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=e6aa68d67f588e047bb800641dcc2a2b&language=en-US&page=${pageNum}`)
  }

  getMovieDetails(id:any):Observable<any>{
return this._http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e6aa68d67f588e047bb800641dcc2a2b&language=en-US`)
  }
}
