import { Injectable, Output, EventEmitter } from '@angular/core';

export interface IMovie {
  tenPhim: string,
  maPhim: string,
  moTa?: string, //thêm dấu chấm hỏi để khi sử dụng interface thì có thể kh cần đến mô tả.
  danhGia: string,
  hinhAnh: string,
  ngayKhoiChieu?: Date;
}

export interface ImovieDetail extends IMovie {
  lichChieu: any[]
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movieList: IMovie[] = [];

  movieDetail: ImovieDetail;

  @Output() movieListEmiter = new EventEmitter();

  @Output() movieStatusEmiter = new EventEmitter();

  @Output() movieItemEmitter = new EventEmitter();
  movieStatus = false;

  constructor() { }

  addMovie(movie: IMovie): void {
    this.movieList.push(movie);
    this.movieListEmiter.emit(this.movieList)
  }

  deleteMovie(maPhim: string): void {
    const index = this.movieList.findIndex(item => item.maPhim === maPhim);
    if (index !== -1) {
      this.movieList.splice(index, 1);
      this.movieListEmiter.emit(this.movieList)
    }
  }

  setMovieList(movie: IMovie[]): void {
    this.movieList = movie;
    this.movieListEmiter.emit(this.movieList)
  }

  setMovieItem(movieItem: ImovieDetail): void {
    this.movieDetail = movieItem;
    this.movieItemEmitter.emit(this.movieDetail)
  }




  changeStatus(): void {
    this.movieStatus = true;
    this.movieStatusEmiter.emit(this.movieStatus)
  }
}
