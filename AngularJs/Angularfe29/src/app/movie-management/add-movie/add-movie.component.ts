import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
  }
  addMovieHandler(maPhim: string, tenPhim: string, moTa: string, danhGia: string, hinhAnh: string): void {
    const newMovie = {
      maPhim,
      tenPhim,
      moTa,
      danhGia,
      hinhAnh
    }
    this._movieService.addMovie(newMovie)
  }
  deleteMovieHandler(): void {
    this._movieService.deleteMovie("1")
  }
  changeStatusHandler(): void {
    this._movieService.changeStatus()
  }
}
