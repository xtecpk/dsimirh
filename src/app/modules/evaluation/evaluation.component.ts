import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { EvalDialogComponent } from './eval-dialog/eval-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../shared-component/services/user.service';
import { NgClass } from '@angular/common';
Chart.register(...registerables);


@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    TranslateModule,
    NgClass
  ],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent implements AfterViewInit {
  readonly dialog = inject(MatDialog)
  isAdmin: boolean = true;
  userService = inject(UserService)

  openDialog() {
    const dialogRef = this.dialog.open(EvalDialogComponent);
  }

  evaluationSourceData = [
    {name: 'Alice', lineManagerN1: 'David Brown', lineManagerN2: 'Eva Williams', type: 'Annual Review',score : 4, evaluationYear:'2022', status: 'Start'},
    {name: 'Alice', lineManagerN1: 'David Brown', lineManagerN2: 'Eva Williams', type: 'Annual Review',score : 4, evaluationYear:'2022', status: 'Start'},
    {name: 'Alice', lineManagerN1: 'David Brown', lineManagerN2: 'Eva Williams', type: 'Annual Review',score : 4, evaluationYear:'2022', status: 'Start'}
  ]

  evaluationColumns: string[] = ['#', 'Name',	'Line Manager N1', 'Line Manager N2', 'Type', 'Score', 'Evaluation Year',	'Status',	'Actions']
  chart!: Chart

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
     this.initializeChart();
     this.initializeChart2();
  }

  data :any = {
    labels: ['Fixation des objectifs non-débutées','Fixation des objectifs complétées'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5, 5],
        backgroundColor: Object.values(["#fcc1a1","#dffbfe"]),
      }
    ]
  };

  data2 :any = {
    labels: ['Evaluations non-débutées', 'Evaluations complétées'],
    datasets: [
      {
        label: 'Dataset 2',
        data: [7,2],
        backgroundColor: Object.values(["#ffa1a1f8","#dffbfe"]),
      }
    ]
  };
  ngOnInit() {
        this.userService.currentUser$.subscribe(user => {
          this.isAdmin = (user == 'admin') ? true : false;
        })
  }
  initializeChart() {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chartCanvas`);
    new Chart(htmlRef,{
      type: 'pie',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'List Of Evaluations'
          }
        }
      }});
  }

  initializeChart2() {

    let htmlRef = this.elementRef.nativeElement.querySelector(`#chartCanvas2`);
    new Chart(htmlRef,{
      type: 'pie',
      data: this.data2,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'List Of Evaluations'
          }
        }
      }});
  }
}
