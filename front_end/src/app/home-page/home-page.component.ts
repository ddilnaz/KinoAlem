import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  logged: boolean = false;
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }

  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.logged = false;
  }
}