import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() qouteCountIn;
  @Input() maxQouteIn;
  constructor() { }

  ngOnInit(): void {
  }

  getPercent(){
    return `${this.qouteCountIn / this.maxQouteIn * 100}%`
  }

}
