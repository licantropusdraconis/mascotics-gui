import { Component, OnInit } from '@angular/core';
import 'materialize-css';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
      var elems2 = document.querySelectorAll('.dropdown-trigger');
      var instances2 =M.Dropdown.init(elems2);
    });
  }

}
