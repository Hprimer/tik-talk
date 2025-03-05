import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';
import { Pageble } from '../interfaces/pageble.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  http=inject(HttpClient)

  baseApiUrl = 'https://icherniakov.ru/yt-course/'
  constructor() { }

  getTestAccounts():Observable <Profile[]>{
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }

  getMe(){
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`)
  }
  getSubscribersShortList(){
    return this.http.get<Pageble<Profile>>(`${this.baseApiUrl}account/subscribers`)
  }
}
