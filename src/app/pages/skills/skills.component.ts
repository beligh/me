import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  tomorrow = new Date(2020, 9, 20, 14, 34);
  constructor() { }

  ngOnInit(): void {
  }

}
