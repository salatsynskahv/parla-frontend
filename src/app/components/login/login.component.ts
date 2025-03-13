import {Component} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatInput} from "@angular/material/input";
import {DecimalValidatorDirective} from "../../directives/decimal-validator.directive";
import {SocialAuthService} from "../../services/social-auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class Login {

  constructor(private authService: SocialAuthService) {
  }

  signInWithGoogle(): void {
   // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
     // console.log('User Info:', user);
      // You can handle the user info here, such as sending it to your backend or storing it in local storage
  //  });
  }

  // You can add a sign-out method if needed:
  signOut(): void {
   // this.authService.signOut();
  }
}
