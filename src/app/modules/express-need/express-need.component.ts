import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { UserService } from '../../shared-component/services/user.service';
import { AddSupportPopupComponent } from '../supports/add-support-popup/add-support-popup.component';

@Component({
  selector: 'app-express-need',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    DatePipe,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './express-need.component.html',
  styleUrl: './express-need.component.scss'
})
export class ExpressNeedComponent {
  readonly dialog = inject(MatDialog)
  supportData: any;

  userService = inject(UserService);

  selectedUser: string | undefined;

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.selectedUser = user;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddSupportPopupComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.supportData = res
      if (this.supportData) this.addSupport(this.supportData);
    });
  }
  addSupport(support: any) {
    this.supportDataSource = [...this.supportDataSource, support]
  }

  supportDataSource = [
    {department: 'Direction 1', service: 'IT', job: '10', numberOfPositionsRequired: '2', proofOfNeed: 'DOC', expressed: '20 Jan 2024'},
    {department: 'Direction 2', service: 'HR', job: '8', numberOfPositionsRequired: '5', proofOfNeed: 'DOC', expressed: '20 Jan 2024'},
    {department: 'Direction 3', service: 'Accounts', job: '11', numberOfPositionsRequired: '0', proofOfNeed: 'DOC', expressed: '20 Jan 2024'}
  ]
  
    supportColumns: string[] = ['#', 'Department', 'Service', 'Job', 'Number Of Positions Required', 'Proof Of Need', 'Expressed']
  
}
