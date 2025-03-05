import { Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";
import { RouterLink } from '@angular/router';
import { ProfilesService } from '../../data/services/profiles.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css'],
  imports: [
    MatIconModule,
    SubscriberCardComponent,
    RouterLink,
    CommonModule
]
})
export class SideBarComponent  {
  profileService = inject(ProfilesService)

  subscribers$ = this.profileService.getSubscribersShortList()

}
