import { Component, OnInit } from "@angular/core";
// import { HttpClient } from '@angular/common/http';
import { MovieService, ImovieDetail } from "src/app/Services/movie.service";
import { MovieGateway } from "src/app/gateways/movie.gateway";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-index",
  templateUrl: "./detail-index.component.html",
  styleUrls: ["./detail-index.component.scss"]
})
export class DetailIndexComponent implements OnInit {
  movieItem: ImovieDetail;

  constructor(
    private _movieGateway: MovieGateway,
    private _movieServides: MovieService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    //lấy dữ liệu xuống lần đầu
    this.movieItem = this._movieServides.movieDetail;

    //theo dõi thay đổi khi có sự thay đổi
    this._movieServides.movieItemEmitter.subscribe(
      (newMovieItem: ImovieDetail) => {
        this.movieItem = newMovieItem;
      }
    );
    //get params from url
    this._activatedRoute.params.subscribe(params => {
      this._movieGateway.fetMovieDetail(params.id).subscribe(
        (res: ImovieDetail) => {
          console.log(res);
          this._movieServides.setMovieItem(res);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
}
