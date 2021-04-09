import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../../models/menu-item';
import {ApiService} from '../../../../services/api.service';
import SideBar from '../../../../fake-api/json/SideBar.json';

@Component({
  selector: 'app-side-bar1',
  templateUrl: './side-bar1.component.html',
  styleUrls: [],
})
export class SideBar1Component implements OnInit {

  menuItems: MenuItem[] = SideBar.data;
  role;
  constructor(public apiService: ApiService,private authService:AuthService
    ) { }

  ngOnInit() {
    //this.role="aa"
    console.log(this.menuItems[0].children);
    let user=this.authService.getUserDetails();
    if(user.role!="admin"){
      this.menuItems[0].children.splice(0,1)
    }else{
      this.role="admin"
    }
    /* this.menuItems[0].children.splice(1,1)
    console.log(this.menuItems[0].children);
 */
    this.getMenuItems();
  }

  getMenuItems() {
    /*this.apiService.getMenuList().subscribe((data: {}) => {
      this.menuItems = data;
    });*/
  }

}
