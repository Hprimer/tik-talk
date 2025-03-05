import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../sideBar/sideBar.component';
import { ProfilesService } from '../../data/services/profiles.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports:[
    RouterOutlet,
    SideBarComponent,
  ]
})
export class LayoutComponent  {
  profileService = inject(ProfilesService) 

  ngOnItit(){
    
  }


}
