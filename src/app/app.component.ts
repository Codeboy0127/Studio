import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { MainComponent } from "./page/main/main.component";



@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, 
    NavbarComponent, 
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
