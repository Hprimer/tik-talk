import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./common-ui/profile-card/profile-card.component";
import { ProfilesService } from './data/services/profiles.service';
import { Profile } from './data/interfaces/profile.interface';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
