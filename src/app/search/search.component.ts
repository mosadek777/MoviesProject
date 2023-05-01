import { Component, OnInit } from '@angular/core';
import { SearchMoviesService } from '../search-movies.service';
SearchMoviesService
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
constructor(private _searchService: SearchMoviesService){

}

getSearchMovies:any[]=[]
getMovies(keyword:string){
this._searchService.getSearch(keyword).subscribe((data)=>{
  this.getSearchMovies= data.results
})
}
ngOnInit(): void {

}
}
