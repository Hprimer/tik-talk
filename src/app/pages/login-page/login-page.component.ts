import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  imports: [ReactiveFormsModule]
})
export class LoginPageComponent{

  showTooltip = false;
  showOnHover = false;
  iconClicked = false;
  toggleTooltip() {
    this.showTooltip = !this.showTooltip;
  }

  authService = inject(AuthService)
  router =inject(Router)

  showPassword = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  form = new FormGroup ({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),

  })
   onSubmit(){
    
    if (this.form.valid){
      console.log(this.form.value)
      //@ts-ignore
      this.authService.login(this.form.value)
      .subscribe(res => {
        this.router.navigate([''])
        console.log(res)
      })
    }
  }
  
}
