import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuardGuard] ,component:HomeComponent},
  {path:'about',canActivate:[AuthGuardGuard] ,component:AboutComponent},
   {path:'login',component:LoginComponent},
  {path:'movies',canActivate:[AuthGuardGuard] ,component:MoviesComponent},
  {path:'people',canActivate:[AuthGuardGuard] ,component:PeopleComponent},
  {path:'register',component:RegisterComponent},
  {path:'tvshows',canActivate:[AuthGuardGuard] ,component:TvshowsComponent},
  {path:'search',canActivate:[AuthGuardGuard] ,component:SearchComponent},
  { path:'movieDetails/:id',canActivate:[AuthGuardGuard],component:MovieDetailsComponent},






  
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
