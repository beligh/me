import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('assets/data/config.json?version=' + environment.version);
  }

  getSkills() {
    return this.http.get('assets/data/skills.json?version=' + environment.version);
  }

}
