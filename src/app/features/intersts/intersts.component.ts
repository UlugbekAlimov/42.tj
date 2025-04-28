import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-intersts',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './intersts.component.html',
  styleUrl: './intersts.component.scss'
})
export class InterstsComponent {

}
