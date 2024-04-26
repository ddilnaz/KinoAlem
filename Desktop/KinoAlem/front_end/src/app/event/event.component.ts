import { Component } from '@angular/core';
import { Event } from '../models';
import { EventService } from '../service/event.service';
import { AuthService } from '../service/auth.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  events:Event[]=[];
  logged: boolean = false;
  constructor(private eventService:EventService){}


  ngOnInit(){
    const token =localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
    this.getEvents();
  }


  getEvents(){
    this.events = this.eventService.getEvent()
  }

}
