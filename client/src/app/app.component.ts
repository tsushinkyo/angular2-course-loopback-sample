import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './modules/shared/sdk/index';
import { testValidator } from './modules/shared/validators/validators';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    username = new FormControl('', [Validators.required, testValidator])
    password = new FormControl('', Validators.required)
    testValidator
    loginForm: FormGroup = this.builder.group({
      username: this.username,
      password: this.password
    });

  constructor(private builder: FormBuilder) {
    LoopBackConfig.setBaseURL("http://localhost:3000");
    LoopBackConfig.setApiVersion("api");
  }

  ngOnInit() {
  }
  
  login() {
    console.log(this.loginForm);
  }

}

