import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModelIdentify } from 'src/app/models/identify.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sessionStarted: boolean = false;//we start the variable as false, as the user is not logged by default
  subs: Subscription = new Subscription();

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.subs = this.securityService.GetUserDataInSession().subscribe((data: ModelIdentify) => {
      this.sessionStarted = data.isLogged;
    });
  }

}
