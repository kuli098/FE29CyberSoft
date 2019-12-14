import { Component, OnInit, Input } from '@angular/core';
import { MovieService, IMovie } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: IMovie[];
  movieStatus: boolean;
  //dependency injection
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    //lấy movieList từ service xuống và  gán vào biến local để xài
    this.movieList = this._movieService.movieList;
    //theo dõi emiter để nhận thông báo mỗi lần movieList có sự thay đổi
    this._movieService.movieListEmiter.subscribe((newMovieList) => {
      this.movieList = newMovieList
    })
    this.movieStatus = this._movieService.movieStatus;
    this._movieService.movieStatusEmiter.subscribe((newStatus) => {
      this.movieStatus = newStatus
    })
  }

}
