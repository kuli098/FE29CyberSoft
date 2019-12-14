import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movieItem: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
