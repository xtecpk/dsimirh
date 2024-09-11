import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { AddBonusDialogComponent } from './add-bonus-dialog/add-bonus-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bonus',
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
    CommonModule,
    MatInput,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    TranslateModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.scss'
})
export class BonusComponent {
  readonly dialog = inject(MatDialog)
  privilegeData: any;
  bonusForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bonusForm = this.fb.group({
      selectField: ['', Validators.required]
    })

  }

  openDialog(field: string) {
    const dialogRef = this.dialog.open(AddBonusDialogComponent, {
      data: {fieldsToShow: [field]}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.privilegeData = res
      if (this.privilegeData) this.addPrivilege(this.privilegeData);
    });
  }
  addPrivilege(privilege: any) {
    this.bonusDataSource = [...this.bonusDataSource, privilege]
  }

  bonusDataSource = [
    {employeeId: '111', fullName: 'John Smith',  job: 'Accountant', grade: '10', service: 'Accounts', criteria: 'feedback', bonus: '5%', startDate: '28 Jun 2024', endDate: '12 Feb 2025', feedbackScore: '12', evaluationScore: '25', status: 'Allocated'},
    {employeeId: '111', fullName: 'Lily John', job: 'Dr', grade: '10', service: 'Accounts', criteria: 'evalution', bonus: '5%', startDate: '28 Jun 2024', endDate: '12 Feb 2025', feedbackScore: '12', evaluationScore: '25', status: 'Allocated'},
    {employeeId: '111', fullName: 'John Smith',  job: 'Accountant', grade: '10', service: 'Accounts', criteria: 'feedback', bonus: '5%', startDate: '28 Jun 2024', endDate: '12 Feb 2025', feedbackScore: '12', evaluationScore: '25', status: 'Not Allocated'}
  ]

  bonusColumns: string[] = ['#', 'Employee ID', 'Full Name', 'Job', 'Grade', 'Service', 'Criteria', 'Bonus', 'Start Date', 'End Date', 'Feedback Score', 'Evaluation Score', 'Status']
  
}
