import { Component, OnInit } from '@angular/core';

import { User } from '../../modules/user/models/user';
import { Thingy } from '../../modules/object/models/thingy';
import { UserService } from '../../modules/user/services/user.service';
import { ThingyService } from '../../modules/object/services/thingy.service';
import { Thing } from '../../modules/shared/sdk/models/index';
import { LoopBackConfig } from '../../modules/shared/sdk/index';
import { UserApi } from '../../modules/shared/sdk/services/index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[];
  things: Thingy[];
  allUsers: User[];
  allThings: Thingy[];
  searchTxtUser: string;
  searchTxtThing: string;
  constructor(private userService: UserService, private thingyService: ThingyService, private userApi: UserApi, private router: Router) { }

  ngOnInit() {
    this.allUsers = this.userService.getUsers();
    this.thingyService.getThingys().subscribe((thingies: Thing[]) => {
      this.things = thingies;
    });
    this.searchTxtUser = '';
    this.searchTxtThing = '';
    this.filterUsers();
  }

  filterUsers() {
    this.users = this.allUsers.filter((user)=> {
      let result = user.active;
      if (this.searchTxtUser) {
        result = result && (user.name.indexOf(this.searchTxtUser) !== -1);
      }
      return result;
    });
  }

  userTxtSearch(search: string) {
    this.searchTxtUser = search;
    this.filterUsers();
  }

  objTxtSearch(search: string) {
    this.thingyService.getThingys(search).subscribe((things: Thing[]) => {
      this.things = things;
    });
  }

  logout() {
    console.log('a');
    this.userApi.logout();
    this.router.navigate(['/login']);
  }

}
