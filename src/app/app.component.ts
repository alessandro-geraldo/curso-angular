import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Alessandro";

  useData = {
    email: "alessandro.com@hotmaail.com",
    role: "admim"
  };


  title = 'curso-angular';
}
