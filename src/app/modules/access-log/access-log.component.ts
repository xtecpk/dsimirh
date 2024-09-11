import { Component, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { CommonTableComponent } from '../../shared-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
Chart.register(...registerables);
@Component({
  selector: 'app-access-log',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTableModule,
    CommonTableComponent,
    TranslateModule
  ],
  templateUrl: './access-log.component.html',
  styleUrl: './access-log.component.scss'
})
export class AccessLogComponent {
  staffDataSource = [
    { name: 'John doe', action: 'Logged In', ipAddress: '192.168.1.1', status: 'Success' },
    { name: 'Jane Smith', action: 'Logged Out', ipAddress: '192.168.1.2', status: 'Success' },
    { name: 'Alice Johnson', action: 'Password Change', ipAddress: '192.168.1.3', status: 'Failed' },
    { name: 'John doe', action: 'Logged In', ipAddress: '192.168.1.1', status: 'Success' },
    { name: 'Jane Smith', action: 'Logged Out', ipAddress: '192.168.1.2', status: 'Success' },
    { name: 'Alice Johnson', action: 'Password Change', ipAddress: '192.168.1.3', status: 'Failed' }
  ]

  staffColumns: string[] = ['#', 'Name', 'Action', 'IP Address', 'Status'];
  chart!: Chart

  constructor(private elementRef: ElementRef) { }
 data = {
  labels: ['Active','Inactive'],
  datasets: [{
    label: '# of Users',
    data: [150, 50],
    backgroundColor: [
      '#DDF2F2',
      '#FFE1E6'
    ],
    borderColor: [
      '#6CDBDB',
      '#FF4069'
    ],
    borderWidth: 1
  }]
};
  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {

    let htmlRef = this.elementRef.nativeElement.querySelector(`#accessLogChart`);
    new Chart(htmlRef, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Active vs Inactive Users'
          }
        }
      }
    });
  }
}
