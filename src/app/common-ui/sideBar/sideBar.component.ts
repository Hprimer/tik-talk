import { Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";
import { RouterLink } from '@angular/router';
import { ProfilesService } from '../../data/services/profiles.service';
import { CommonModule } from '@angular/common';
import { catchError, firstValueFrom, Observable, of, tap } from 'rxjs';
import { Pageble } from '../../data/interfaces/pageble.interface';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from "../../helpers/pipes/imgUrl.pipe";


@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css'],
  imports: [
    MatIconModule,
    SubscriberCardComponent,
    RouterLink,
    CommonModule,
    ImgUrlPipe
]
})
export class SideBarComponent  {
  profileService = inject(ProfilesService)

  // subscribers$:Observable<Pageble<Profile>> = this.profileService.getSubscribersShortList()
  subscribers$ = this.profileService.getSubscribersShortList().pipe(
    tap(data => console.log('Данные подписчиков:', data)), // Логируем данные
    catchError(error => {
      console.error('Ошибка при загрузке подписчиков:', error);
      return of(null); // Возвращаем null в случае ошибки
    })
  );

  me=this.profileService.me
  ngOnInit(){
    firstValueFrom(this.profileService.getMe())
  }
}
