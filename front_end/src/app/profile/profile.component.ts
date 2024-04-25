import { Component } from '@angular/core';
import { Kino } from '../models';
import { AuthService } from '../service/auth.service';
import { KinoService } from '../service/kino.service';
import { HttpClient } from '@angular/common/http';
// import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  logged: boolean = false;
  username:string='';
  kinos:Kino[]=[];
  jsonDataResult:any;
  constructor(private kinoService: KinoService,private http:HttpClient) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      console.log(token)
      const username=localStorage.getItem('username')
      if (username){
        this.username=username
        
      }
      this.initKinos()
      
    }
    
  }
  initKinos(){
    this.kinoService.getUserKinos(this.username).subscribe((data)=>{
      this.kinos=data
      console.log(data)
    })
  }
  deleteKino(id:number){
    console.log(id)
  }
}