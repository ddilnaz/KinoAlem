import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KinoComponent } from './kino/kino.component';
import { ProfileComponent } from './profile/profile.component';
import { WhoAddedComponent } from './who-added/who-added.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GenreComponent } from './genre/genre.component';
import { CourseComponent } from './course/course.component';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { RouterModule } from '@angular/router';


@NgModule({
  
  declarations: [
     KinoComponent,
     AppComponent,
     HomePageComponent,
    ProfileComponent,
     WhoAddedComponent,
    LoginComponent,
     SignUpComponent,
    GenreComponent,
    CourseComponent,
    EventComponent,
    // RouterModule,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
     CommonModule,
    RouterModule.forRoot([]),
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}