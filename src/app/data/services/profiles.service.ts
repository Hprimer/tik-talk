import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

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
}
