import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-finish-session',
  templateUrl: './finish-session.component.html',
  styleUrls: ['./finish-session.component.css']
})
export class FinishSessionComponent implements OnInit {

  constructor(private securityService:SecurityService,
    private router:Router) { }

  ngOnInit(): void {
    this.securityService.DeleteSessionInformation();
    this.router.navigate(['home'])
  }

}
