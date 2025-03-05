import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../../data/interfaces/profile.interface';
import { ImgUrlPipe } from "../../../helpers/pipes/imgUrl.pipe";

@Component({
  selector: 'app-subscriber-card',
  templateUrl: './subscriber-card.component.html',
  styleUrls: ['./subscriber-card.component.css'],
  imports: [ImgUrlPipe]
})
export class SubscriberCardComponent {

  @Input() profile!: Profile

}
