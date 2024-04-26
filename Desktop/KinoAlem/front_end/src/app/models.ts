export interface User{
    username: string,
    password:string,
}
export interface Genre{
    id:number,
    name:string
}
export interface Kino{
    id:number,
    name:string,
    description:string,
    genre:string
}
export interface Course{
  id:number,
  courseName:string,

  specialization:string,
  url:string
}
export interface Event{
  id:number,
  eventName:string,
  specialization:string,
  url:string
}
export interface AuthToken {
    refresh: string;
    access:string;
}
export interface Status{
    status:string;
}
export interface Application{
    username:string;
    kinoId:number;
}
export interface Genre1{
    id: number;
    name: string;
    description: string;
    duration:string;
}