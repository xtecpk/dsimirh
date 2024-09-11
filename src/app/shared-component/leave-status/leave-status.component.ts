import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-leave-status',
  standalone: true,
  imports: [
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './leave-status.component.html',
  styleUrl: './leave-status.component.scss'
})
export class LeaveStatusComponent {

}
