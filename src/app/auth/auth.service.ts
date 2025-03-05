import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { TokenResposne } from './auth.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  router = inject(Router)
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
      this.refreshToken = this.cookieService.get('refreshToken')

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
      tap(val => 
       this.saveTokens(val)
      )
    )
  }

  refreshAuthToken() {
    return this.http.post<TokenResposne>(
      `${this.baseApiUrl}refresh`,
      {
        refresh_token: this.refreshToken,
      }
    ).pipe(
      tap(res =>{
        this.saveTokens(res)
      }),
      catchError(err => {
        this.logout();
        return throwError(() => err); // Новый синтаксис throwError
      })
    );
  }
  logout() {
    this.cookieService.deleteAll()
    this.token = null
    this.refreshToken = null
    this.router.navigate(['/login'])  
  }

  saveTokens(res: TokenResposne){
    this.token = res.access_token
        this.refreshToken = res.refresh_token

        this.cookieService.set('token', this.token)
        this.cookieService.set('refreshToken', this.refreshToken)
  }
}
