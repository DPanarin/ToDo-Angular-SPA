import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() totalTasks: number;
  @Input() completedTasks: number;

  get completedTasksPercentage() {
    return Math.round((this.completedTasks * 100) / this.totalTasks);
  }

  constructor() { }

  ngOnInit() {
  }


}
