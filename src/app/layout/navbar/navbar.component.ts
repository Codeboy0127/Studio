import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  imports: [
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
