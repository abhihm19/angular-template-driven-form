import { Component } from '@angular/core';
import { SignupForm } from '../model/signup';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  user: SignupForm = {
    name: '',
    dob: new Date(),
    email: '',
    password: '',
    newsLetterEnabled: false
  };

  onSubmit() {
    console.log(this.user);
  }

}
