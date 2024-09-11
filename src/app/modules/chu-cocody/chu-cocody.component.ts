import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AnnouncementDialogComponent } from './announcement-dialog/announcement-dialog.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { RouterLink } from '@angular/router';
import { OrgChartComponent } from '../../shared-component/org-chart/org-chart.component';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../shared-component/services/user.service';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-chu-cocody',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatTableModule,
    MatButtonModule,
    CommonTableComponent,
    RouterLink,
    OrgChartComponent,
    TranslateModule
  ],
  templateUrl: './chu-cocody.component.html',
  styleUrl: './chu-cocody.component.scss'
})
export class ChuCocodyComponent {
  readonly dialog = inject(MatDialog)
  isAdmin: boolean = true;
  userService = inject(UserService)
  httpService = inject(HttpService);
  announcementData: any = [];

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.isAdmin = (user == 'admin') ? true : false;
    })
    this.fetchData();
  }

  fetchData() {
    this.httpService.httpGetReq('getallannouncements').pipe(
      catchError(err => {
        throw err;
      })
    ).subscribe((res: any) => {
      if (res) {
        res.data.map((announce:any) => {
          const announceObj = {
            title: announce.Title,
            issueDate:  announce.IssueDate,
            endDate: announce.EndDate
          }
          this.announcementData.push(announceObj)
        })
        this.announcementsDataSource = this.announcementData
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AnnouncementDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.announcementData = res
      if (this.announcementData) this.addAnnouncement(this.announcementData);
    });
  }

  agentsDataSource = [
    { departmentHead: 'John Smith', sus: 'John Doe', positionNumber: '000-000', service: 'Web Development', division: 'IT',},
    { departmentHead: 'John Smith', sus: 'John Doe', positionNumber: '000-000', service: 'Web Development', division: 'IT',},
    { departmentHead: 'John Smith', sus: 'John Doe', positionNumber: '000-000', service: 'Web Development', division: 'IT',}
  ];

  agentsColumns: string[] = ['#', 'Department Head', 'SUS', 'Position Number', 'service', 'Division']

  announcementsDataSource = [
    // {title: 'Important Announcement', issueDate: '2024-06-10', endDate: '2024-06-20'},
    // {title: 'Important Announcement', issueDate: '2024-06-10', endDate: '2024-06-20'},
  ];

  announcementsColumns: string[] = ['#', 'Title', 'Issue Date', 'End Date', 'Actions'];

  addAnnouncement(data: { title: string; issueDate: string; endDate: string; }) {
    // this.announcementsDataSource = [...this.announcementsDataSource, data]
  }

}
