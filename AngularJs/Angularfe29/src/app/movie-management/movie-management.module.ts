import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  declarations: [MovieListComponent, MovieItemComponent, AddMovieComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MovieListComponent,
    AddMovieComponent
  ]
})
export class MovieManagementModule { }
