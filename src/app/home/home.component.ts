import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
imagePath:string ="https://image.tmdb.org/t/p/w500/"
  trendingMovies:any[]=[]
  trendingTvshows:any[]=[]
  trendingPeople:any[]=[]
constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService, private _authService:AuthService){

}

getTrendingMovies (pageNum:any){
  this.spinner.show();
  this._TrendingService.getTrending('movie',pageNum).subscribe((response) =>{
   this.trendingMovies= response.results.slice(0,10);
   this.spinner.hide();

  })
}




getTrendingTvshows (pageNum:any){
  this.spinner.show();

  this._TrendingService.getTrending('tv',pageNum).subscribe((response) =>{
 this.trendingTvshows = response.results.slice(0,10);
 this.spinner.hide();
  })
}


getPeople (pageNum:any){
  this.spinner.show();

  this._TrendingService.getTrending('person',pageNum).subscribe((response) =>{
 this.trendingPeople = response.results.slice(0,10);
 this.spinner.hide();
  })
}


ngOnInit(): void {


  this.getTrendingMovies(1)
  this.getTrendingTvshows(1)
  this.getPeople(1)
}
}
