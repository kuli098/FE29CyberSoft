import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieGateway {
  constructor(private _http: HttpClient) {}
  fetMovieList(): Observable<any> {
    return this._http.get(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    );
  }
  fetMovieDetail(): Observable<any> {
    return this._http.get(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1314"
    );
  }
}
