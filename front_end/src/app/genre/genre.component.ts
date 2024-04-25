import { Component } from '@angular/core';
import { Genre } from '../models';
import { KinoService } from '../service/kino.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent {
  genres:Genre[]=[];
  logged: boolean = false;
  constructor(private kinoService:KinoService){}
  ngOnInit(){
      this.getGenres();
  }
  getGenres(){
    this.kinoService.getGenres().subscribe((genres)=>{
      this.genres = genres;
    })
  }

}
