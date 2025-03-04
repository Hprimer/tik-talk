import { Component, inject, OnInit } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfilesService } from '../../data/services/profiles.service';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  imports: [ProfileCardComponent]
})
export class SearchPageComponent implements OnInit {

  profileService=inject(ProfilesService)
  profiles: Profile[] = []
  constructor(){
    this.profileService.getTestAccounts().subscribe(val => {
      this.profiles = val
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}

