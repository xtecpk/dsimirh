import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { CalenderComponent } from '../../shared-component/calender/calender.component';
import { StarRatingComponent } from '../../shared-component/star-rating/star-rating.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CalenderComponent,
    StarRatingComponent,
    TranslateModule
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
