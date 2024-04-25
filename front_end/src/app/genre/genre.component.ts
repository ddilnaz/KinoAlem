import { Component } from '@angular/core';
import { Genre } from '../models';
import { KinoService } from '../service/kino.service';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent {
  genre:Genre[]=[];
  logged: boolean = false;
  constructor(private kinoService:KinoService){}
  ngOnInit(){
      this.getGenre();
  }
  getGenre(){
    this.kinoService.getGenre().subscribe((genre)=>{
      this.genre = genre;
    })
  }

}
