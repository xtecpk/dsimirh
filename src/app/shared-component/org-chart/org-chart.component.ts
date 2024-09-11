import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';


interface OrgChartNode {
  label: string;
  type?: string;
  styleClass?: string;
  expanded?: boolean;
  data?: any;
  children?: OrgChartNode[];
}



@Component({
  selector: 'app-org-chart',
  standalone: true,
  imports: [
    OrganizationChartModule
  ],
  templateUrl: './org-chart.component.html',
  styleUrl: './org-chart.component.scss'
})
export class OrgChartComponent {
  data: TreeNode[] = [
    {
        label: 'Argentina',
        expanded: true,
        data: 'ar',
        children: [
            {
                label: 'Argentina',
                expanded: true,
                data: 'ar',
                children: [
                    {
                        label: 'Argentina',
                        data: 'ar'
                    },
                    {
                        label: 'Croatia',
                        data: 'hr'
                    }
                ]
            },
            {
                label: 'France',
                expanded: true,
                data: 'fr',
                children: [
                    {
                        label: 'France',
                        data: 'fr'
                    },
                    {
                        label: 'Morocco',
                        data: 'ma'
                    }
                ]
            }
        ]
    }
];
}