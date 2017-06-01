import { Component, OnInit } from '@angular/core';
import { testValidator } from '../../shared/validators/validators';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User, AccessToken } from '../../shared/sdk/models/index';
import { UserApi } from '../../shared/sdk/services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required, testValidator])
    password = new FormControl('', Validators.required)
    testValidator
    loginForm: FormGroup = this.builder.group({
      username: this.username,
      password: this.password
    });
  constructor(private builder: FormBuilder, private userApi: UserApi, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm);
    this.userApi.login({'email' : this.username.value, 'password': this.password.value}, true).subscribe((user) => {
      console.log(user);
      if(user) this.router.navigate(['']);
    }, (err)=> alert(err.message));
  }
}
