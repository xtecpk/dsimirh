import { Component, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
Chart.register(...registerables);


@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './hr-dashboard.component.html',
  styleUrl: './hr-dashboard.component.scss'
})
export class HrDashboardComponent {
  workForceSourceData = [
    {name: 'John Doe', employment: 'Full-time', sus: 'Jane Smith', subdivision: 'Technology Services'},
    {name: 'John Doe', employment: 'Full-time', sus: 'Jane Smith', subdivision: 'Technology Services'},
    {name: 'John Doe', employment: 'Full-time', sus: 'Jane Smith', subdivision: 'Technology Services'},
    {name: 'John Doe', employment: 'Full-time', sus: 'Jane Smith', subdivision: 'Technology Services'}
  ]

  workForceColumns: string[] = ['#', 'Name',	'Employment',	'Sus',	'Subdivision']
  chart!: Chart

  constructor(private elementRef: ElementRef) {}

  data :any = {
    labels: ['Women','Men'],
    datasets: [
      {
        label: '# of votes',
        data: [60,40],
        backgroundColor: ["#FFE1E6","#DAECFB"],
      }
    ]
  };
  ngOnInit() {
        this.initializeChart();
  }

  initializeChart() {

    let htmlRef = this.elementRef.nativeElement.querySelector(`#hrChartCanvas`);
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
            text: 'Chart.js Pie Chart'
          }
        }
      }});
  }
}
