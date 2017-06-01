import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './modules/shared/sdk/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
    LoopBackConfig.setBaseURL("http://localhost:3000");
    LoopBackConfig.setApiVersion("api");
  }

  ngOnInit() {
  }
  
  

}

