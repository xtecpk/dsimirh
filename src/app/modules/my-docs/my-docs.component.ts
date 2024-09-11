import { Component, NgModule, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CalenderComponent } from '../../shared-component/calender/calender.component';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddDocsDialogComponent } from './add-docs-dialog/add-docs-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-docs',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CalenderComponent,
    CommonTableComponent,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './my-docs.component.html',
  styleUrl: './my-docs.component.scss'
})
export class MyDocsComponent {

  activeButton: string = '';

  readonly dialog = inject(MatDialog)
  docData: any;

  openDialog() {
    const dialogRef = this.dialog.open(AddDocsDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.docData = res
      if (this.docData) this.addDocs(this.docData);
    });
  }
  addDocs(doc: any) {
    this.docDataSource = [...this.docDataSource, doc]
  }

  docDataSource = [
    {description: 'This is doc description', category: 'leaves'},
    {description: 'This is doc description', category: 'Training certificates & Internships'},
    {description: 'This is doc description', category: 'leaves'},
    {description: 'This is doc description', category: 'Pay Slip'}
  ]

  docsColumns: string[] = ['#', 'Description', 'Category', 'Actions']
  
}
