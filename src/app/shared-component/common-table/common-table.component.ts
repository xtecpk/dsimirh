import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
// import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
// import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-common-table',
  standalone: true,
  imports: [
    MatTableModule, 
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    TranslateModule,
    MatButtonModule,
    RouterModule
    // MatSortModule,
  ],
  templateUrl: './common-table.component.html',
  styleUrl: './common-table.component.scss'
})
export class CommonTableComponent {

  @Input() dataSource: any
  dataSource2: any
  @Input() set dataSourceIpt(value:any){
    if(value){
      this.dataSource2 =  value
      this.TableDataSource.data = this.dataSource2
    }
  }
  @Input() displayCols: any
  @Input() fromComp: string = ''
  @Input() exportImport: string = ''
  // @ViewChild(MatSort) sort!: MatSort;
  filterData = ''

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  TableDataSource = new MatTableDataSource();

  constructor(
    // private _liveAnnouncer: LiveAnnouncer,
  ) { }

  ngAfterViewInit() {
    // this.TableDataSource.sort = this.sort;
    this.TableDataSource.paginator = this.paginator;
  }

  convertToCamelCase(str: any) {
    // Convert the string to lowercase and split it into words
    const words = str.toLowerCase().split(' ');

    // Capitalize the first letter of each word except the first one
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back together
    return words.join('');
  }

  sortData(searchTerm: any) {
    // Convert the search term to lowercase for case-insensitive comparison
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Function to check if any object key contains the search term
    const containsSearchTerm = (obj: any) => {
      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          if (containsSearchTerm(obj[key])) {
            return true;
          }
        } else {
          if (obj[key].toString().toLowerCase().includes(lowerCaseSearchTerm)) {
            return true;
          }
        }
      }
      return false;
    };

    // Filter the array based on the search term
    this.TableDataSource.data = this.dataSource.filter(containsSearchTerm);
  }

  // announceSortChange(sortState: any) {
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

}
