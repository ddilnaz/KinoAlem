import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { KinoComponent } from './kino/kino.component';
import { WhoAddedComponent } from './who-added/who-added.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GenreComponent } from './genre/genre.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
const routes: Routes = [
  {path:'',component:HomePageComponent,children:[
    {path:'',redirectTo:'/',pathMatch:'full'},
    {path:'',component:KinoComponent},
    { path:'profile',component:ProfileComponent,},
    { path:'genre',component:GenreComponent},
      { path:'courses',component:CourseComponent},
      { path:'events',component:EventComponent},
  ],
  },
  { path:'login',component:LoginComponent},
  { path:'sign-up',component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }