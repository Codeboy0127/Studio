import { Component,ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { EquipmentComponent } from "../../features/component/equipment/equipment.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule,
    MatIconModule,
    EquipmentComponent,
    TranslateModule
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {

}
