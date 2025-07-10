import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnInit {
  counters = {
    experienceCount: 0,
    studentsCount: 0,
    lessonsCount: 0,
  };

  private targets = {
    experienceCount: 5,
    studentsCount: 7749,
    lessonsCount: 272,
  };

  ngOnInit() {
    // this.animateCounter('experienceCount', this.targets.experienceCount, 3000);
    // this.animateCounter('studentsCount', this.targets.studentsCount, 1000);
    // this.animateCounter('lessonsCount', this.targets.lessonsCount, 1000);
  }

  animateCounter(
    property: keyof typeof this.counters,
    target: number,
    duration: number
  ) {
    const interval = 30;
    const step = Math.max(1, Math.floor(target / (duration / interval)));

    const updateCounter = () => {
      // if (this.counters[property] < target) {
      //   this.counters[property] = Math.min(this.counters[property] + step, target);
      //   setTimeout(updateCounter, interval);
    };
  }

  // updateCounter();
}
