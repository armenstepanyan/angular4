import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: []
})
export class NavComponent implements OnInit {

  appName: string = 'Test App';

  constructor() { }

  ngOnInit() {
  }

}
