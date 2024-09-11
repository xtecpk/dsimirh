import { Component, inject } from '@angular/core';
import { AddSupportPopupComponent } from './add-support-popup/add-support-popup.component';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { UserService } from '../../shared-component/services/user.service';
import { HttpService } from '../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-supports',
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
  templateUrl: './supports.component.html',
  styleUrl: './supports.component.scss'
})
export class SupportsComponent {

  httpService= inject(HttpService)
  readonly dialog = inject(MatDialog)
  supportData: any =[];
  supportDataSource : any = []

  userService = inject(UserService);

  selectedUser: string | undefined;

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.selectedUser = user;
    })
    this.fetchData()
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

  fetchData() {
    this.httpService.httpGetReq('getallsupports').pipe(
      catchError(err => {
        throw err
      })
    ).subscribe((res:any) => {
      console.log("response",res)
      if(res){
        res.data.map((support:any) => {
          const supportObj = {
            title: support.Title,
            type : support.DocumentType ,
            //file: support.DocumentType,
            createdAt:  support.CreatedAt,

          }
          this.supportData.push(supportObj)
        })
        this.supportDataSource = this.supportData
      }
    })
  }
  
  /*supportDataSource = [
    {title: 'Guide Book', type: 'Document', file: 'pdf', createdAt: '20 Jan 2024'},
    {title: 'Vidéo Demo', type: 'Vidéo', file: 'mp3', createdAt: '20 Feb 2024'},
    {title: 'Office Files', type: 'Document', file: 'ppt', createdAt: '1 Jan 2024'}
  ]*/
  
    supportColumns: string[] = ['#', 'Title', 'Type', 'File', 'Created At']
}
