import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { AddTeamDialogComponent } from './add-team-dialog/add-team-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    MatChipsModule,
    TranslateModule
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  readonly dialog = inject(MatDialog)
  teamData: any;
  httpService = inject(HttpService);
  allTeams: any = [];

  ngOnInit():void {
    this.fetchTeamData();
  }

  fetchTeamData() {
    this.httpService.httpGetReq('getallteams').pipe(
      catchError(err => {
        throw err;
      })
    ).subscribe((res: any) => {
      if (res) {
        console.log('response', res);
        this.allTeams = res;
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTeamDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.teamData = res
    });
  }
}
