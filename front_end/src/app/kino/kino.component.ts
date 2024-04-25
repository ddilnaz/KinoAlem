import { Component } from '@angular/core';
import { Genre, Kino } from '../models';
import { KinoService } from '../service/kino.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-kino',
  templateUrl: './kino.component.html',
  styleUrl: './kino.component.css'
})
export class KinoComponent {

  kinos:Kino[]=[];
  logged: boolean = false;
  test:Genre[]=[]
  constructor(private kinoService:KinoService){}

  ngOnInit(){
    const token =localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
      this.getKinos();
  }
  getKinos(){
    this.kinoService.getKinos().subscribe((z)=>{
      this.kinos=z
    })
  }
  submit(id:number){
    const username = localStorage.getItem('username');
    console.log(username)
    if (username){
      const token =localStorage.getItem('token');
      if (token){
        this.kinoService.addKino(id,username).subscribe((status)=>{
          if(status){
            console.log(status)
          }
        })
      }
    }
  }

}
