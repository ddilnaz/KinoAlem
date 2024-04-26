import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Event } from '../models';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  BASE_URL = 'http://localhost:4200'
  // jsonDataResult:any;
  // userCourses:Event[]=[];
  events:Event[]=[{id:1,eventName:'Data Award 2023',specialization: "Data Science",url:'https://all-events.ru/events/data-award-2023/'},
    {id:2,eventName:'TECH FORUM & AWARDS 2023',specialization:"Data Science",url:'https://www.udemy.com/course/machinelearning/'},
    {id:3,eventName:'IT Security Day 2023',specialization:"Cyber Security",url:'https://all-events.ru/events/it-security-day-2023/'},
    {id:4,eventName:'TeamLead ITHRFest 2023',specialization:"Python",url:'TeamLead ITHRFest 2023'},
    {id:5,eventName:'HR IT DAY 2023',specialization:"DevOps",url:'https://all-events.ru/events/hr-it-day-2023/'},
    {id:6,eventName:'HolyJS 2023 Spring',specialization:"JavaScript",url:'https://all-events.ru/events/holyjs-2023-spring-/'},
  ]
  constructor(private client: HttpClient) { }
  getEvents(): Observable<Event[]> {
    return this.client.get<Event[]>(
      `${this.BASE_URL}/api/events/`
    )
  }
  getEvent() {
    return this.events
  }

}