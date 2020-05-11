import { Component, OnInit } from '@angular/core';
import {AppService} from '@app/shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appConfig: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig() {
    this.appService.getConfig().subscribe(data => {
      this.appConfig = data;
    });
  }

}
