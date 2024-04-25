import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Application, Genre, Kino ,Genre1,Status} from '../models';


@Injectable({
  providedIn: 'root'
})
export class KinoService {

  BASE_URL = 'http://localhost:8000'
  jsonDataResult:any;
  userKino:Kino[]=[];
  constructor(private client: HttpClient) { }
  getKino(): Observable<Kino[]> {
    return this.client.get<Kino[]>(
      `${this.BASE_URL}/api/kino/`
    )
  }
  getGenre(): Observable<Genre[]> {
    return this.client.get<Genre[]>(`${this.BASE_URL}/api/Genre/`);
  }
  addKino(id:number,username:string):Observable<Status>{
    return this.client.post<Status>(`${this.BASE_URL}/api/kino/add`,{vacancy_id:id,user_id:username})
  }
  addKinoJSON(id:number,username:string){
    this.client.post<Application>('assets/data.json',{username,id})
  }
  getUserKino(username:string): Observable<Kino[]> {
    return this.client.post<Kino[]>(
      `${this.BASE_URL}/api/userkino/`,{user_id:username,vacancy_id:"2"})
  }
  getUserVacanciesTest(username:string) {
    let userKino:Kino[]=[]
    return userKino
  }
}
