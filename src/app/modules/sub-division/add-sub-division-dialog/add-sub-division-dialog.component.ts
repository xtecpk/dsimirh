import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { HttpService } from '../../../../services/http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-sub-division-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    TranslateModule
  ],
  templateUrl: './add-sub-division-dialog.component.html',
  styleUrl: './add-sub-division-dialog.component.scss'
})
export class AddSubDivisionDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddSubDivisionDialogComponent>)
  subDivisionForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);
  httpService = inject(HttpService);
  @Input() divisionData: any = []

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subDivisionForm = this.fb.group({
      assistantDirector: ['', Validators.required],
      subDivisionName: ['', Validators.required],
      divisionName: [''],

    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.subDivisionForm.valid) {
      const formData = this.subDivisionForm.value;
      const subDivisionData = {
        SubDivisionName: formData.subDivisionName,
        AssistantDirector: formData.assistantDirector,
        DivisionId: formData.divisionName
      }

      this.httpService.httpPostReq('addsubdivision',subDivisionData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
        this.dialogRef.close(subDivisionData);
      })




      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(subDivisionData);
    }
  }
}
