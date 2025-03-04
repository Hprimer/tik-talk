import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenResposne } from './auth.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/'
  cookieService = inject(CookieService)

///////////////////////////
// username:"naaaailsSsS"//
// password:"4oHJPH2p0k" //
///////////////////////////

  token: string | null=null
  refreshToken: string | null=null

  get isAuth(){
    if(!this.token){
      this.token = this.cookieService.get('token')
    }
    return !!this.token
  }
  login(payload:{username: string, password:string}){
    const fd = new FormData()

    fd.append('username', payload.username)
    fd.append('password', payload.password)

    return this.http.post<TokenResposne>(`${this.baseApiUrl}token`,
      fd
    ).pipe(
      tap(val => {
        this.token = val.access_token
        this.refreshToken = val.refresh_token

        this.cookieService.set('token', this.token)
        this.cookieService.set('refreshToken', this.refreshToken)

      })
    )
  }


}
