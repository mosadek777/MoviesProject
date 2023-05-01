import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movieDetails:any=""
constructor(private _activatedRoute:ActivatedRoute , private  _trendingService:TrendingService){

let movieId = _activatedRoute.snapshot.params['id']
 
_trendingService.getMovieDetails(movieId).subscribe(res=>{
this.movieDetails = res
console.log(res);
})
}
}
