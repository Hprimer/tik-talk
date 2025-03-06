import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';
import { Pageble } from '../interfaces/pageble.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  http=inject(HttpClient)

  baseApiUrl = 'https://icherniakov.ru/yt-course/'
  constructor() { }

  me = signal<Profile | null>(null)

  getTestAccounts():Observable <Profile[]>{
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }

  getMe(){
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`)
      .pipe(
        tap(res=> this.me.set(res))
      )
  }
  getSubscribersShortList(){
    return this.http.get<Pageble<Profile>>(`${this.baseApiUrl}account/subscribers`)
    .pipe(
      map(res =>res.items.slice(0,3))
    )
  }
}

