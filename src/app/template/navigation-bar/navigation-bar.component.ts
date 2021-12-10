import { Component, OnInit } from '@angular/core';
import 'materialize-css';
import { Subscription } from 'rxjs';
import { ModelIdentify } from 'src/app/models/identify.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  sessionStarted:boolean=false;//we start the variable as false, as the user is not logged by default
  subs: Subscription = new Subscription();

  constructor(private securityService:SecurityService) {}

  ngOnInit(): void {
    this.subs = this.securityService.GetUserDataInSession().subscribe((data:ModelIdentify)=>{
      //check if data is a string of only {}, if a JSON element has no data or if it is an empty object
      //if(data.isLogged && data!='{}' && JSON.stringify(data) != '{}' && Object.entries(data).length != 0){
      /*if(data.isLogged){
        console.log(data);
        this.sessionStarted=true;
      }
      else{
        this.sessionStarted=false;
      }*/
      this.sessionStarted = data.isLogged;
      NavigationMenuEffects();
    });
    function NavigationMenuEffects(){
      var elems = document.querySelectorAll('.sidenav');
      var elems2 = document.querySelectorAll('.dropdown-trigger');
      var elems3 = document.querySelectorAll('.collapsible');
      var instances = M.Sidenav.init(elems);
      var instances2 =M.Dropdown.init(elems2,{hover:true,constrainWidth:true,closeOnClick:true,coverTrigger:false});
      var instances3 =M.Collapsible.init(elems3);
    }
    document.addEventListener('DOMContentLoaded', function(){
      NavigationMenuEffects();
    });
  }

}
