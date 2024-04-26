import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Application, Genre, Kino ,Genre1,Status} from '../models';


@Injectable({
  providedIn: 'root'
})
export class KinoService {

  BASE_URL = 'http://localhost:4200'
  jsonDataResult:any;
  userKino:Kino[]=[];
  constructor(private client: HttpClient) { }
  getKinos(): Observable<Kino[]> {
    return this.client.get<Kino[]>(
      `${this.BASE_URL}/api/kinos/`
    )
  }
  getGenres(): Observable<Genre[]> {
    return this.client.get<Genre[]>(`${this.BASE_URL}/api/genres/`);
  }
  addKino(id:number,username:string):Observable<Status>{
    return this.client.post<Status>(`${this.BASE_URL}/api/kinos/add`,{kino_id:id,user_id:username})
  }
  addKinoJSON(id:number,username:string){
    this.client.post<Application>('assets/data.json',{username,id})
  }
  getUserKinos(username:string): Observable<Kino[]> {
    return this.client.post<Kino[]>(
      `${this.BASE_URL}/api/userkinos/`,{user_id:username,kino_id:"2"})
  }
  getUserKinosTest(username:string) {
    let userKinos:Kino[]=[]
    return userKinos
  }
}
