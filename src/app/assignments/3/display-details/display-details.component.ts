import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showText = true;
  log: number[] = [];
  logTime: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showText = !this.showText;
    this.log.push(this.log.length + 1);
    this.logTime.push(new Date());
  }

}
