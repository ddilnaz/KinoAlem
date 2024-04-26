import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HEADERS } from '../mainpagecomponents/constants/main.constants';

@Injectable({
  providedIn: 'root',
})
export class MasterserviceService {
  movieTypelist: any = [];
  detaileddata: any;
  moviedetail: any;
  watchlist: any = [];
  tvshowatchlist: any = [];
  pageNumber: any = 1;
  tvpagenumber: any = 1;
  flag: any = true;

  constructor(public http: HttpClient) {}

  nextsection() {
    if (this.pageNumber > 200) return alert('Click previuos to see movies');
    else this.pageNumber += 1;
  }
  previoussection() {
    if (this.pageNumber > 1) this.pageNumber -= 1;
    else return alert('Click next to see movies');
  }

  getmovieTypelist() {
    return this.http.get(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',
      {
        headers: {
          accept: HEADERS.accept,
          Authorization: HEADERS.authorization,
        },
      }
    );
  }

  getAllMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' +
        this.pageNumber +
        '&sort_by=popularity.desc',
      {
        headers: {
          accept: HEADERS.accept,
          Authorization: HEADERS.authorization,
        },
      }
    );
  }

  getMoviesByType(movieType: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movieType +
        '&include_adult=false&language=en-US&page=' +
        this.pageNumber,
      {
        headers: {
          accept: HEADERS.accept,
          Authorization: HEADERS.authorization,
        },
      }
    );
  }

  getalltvshow() {
    return this.http.get(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=' +
        this.tvpagenumber +
        '&sort_by=popularity.desc',
      {
        headers: {
          accept: HEADERS.accept,
          Authorization: HEADERS.authorization,
        },
      }
    );
  }

  addToWatchList(data: any) {
    this.watchlist.push(data);
  }
  tvshowaddtowatchlist(data: any) {
    this.tvshowatchlist.push(data);
  }

  removeFromwatchlist(data: any) {
    for (let listdata of this.watchlist) {
      if (listdata.title == data.title) {
        this.watchlist.pop(data);
        console.log(this.watchlist);
      }
    }
  }

  removeFromTVwatchlist(data: any) {
    for (let listdata of this.tvshowatchlist) {
      if (listdata.original_name == data.original_name) {
        this.tvshowatchlist.pop(data);
        console.log(this.tvshowatchlist);
      }
    }
  }

  getsearchdata(str: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/search/tv?query=' +
        str +
        '&include_adult=false&language=en-US&page=1',
      {
        headers: {
          accept: HEADERS.accept,
          Authorization: HEADERS.authorization,
        },
      }
    );
  }
}
