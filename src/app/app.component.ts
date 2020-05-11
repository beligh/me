import {Component, OnInit} from '@angular/core';
import {AppService} from '@app/shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
