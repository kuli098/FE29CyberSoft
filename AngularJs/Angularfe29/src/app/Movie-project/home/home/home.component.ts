import { Component, OnInit } from "@angular/core";
// import { HttpClient } from '@angular/common/http';
import { MovieService, IMovie } from "src/app/Services/movie.service";
import { MovieGateway } from "src/app/gateways/movie.gateway";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movieList: IMovie[];
  constructor(
    private _movieGateway: MovieGateway,
    private _movieServides: MovieService
  ) {}

  ngOnInit() {
    this.movieList = this._movieServides.movieList;

    this._movieServides.movieListEmiter.subscribe((newMovieList: IMovie[]) => {
      this.movieList = newMovieList;
    });

    // this._http.get(
    //   'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
    // )
    this._movieGateway.fetMovieList().subscribe(
      (res: IMovie[]) => {
        console.log(res);
        //gửi data lên service, lưu vào biến movielist
        this._movieServides.setMovieList(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
