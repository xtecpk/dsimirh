import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { catchError } from 'rxjs';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-add-contract-dialog',
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
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-contract-dialog.component.html',
  styleUrl: './add-contract-dialog.component.scss'
})
export class AddContractDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddContractDialogComponent>)
  contractForm: FormGroup = new FormGroup({});
  httpService= inject(HttpService)
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contractForm = this.fb.group({
      contractName: ['', Validators.required],
      contractDescription: ['', Validators.required],
      // startDate: ['', Validators.required],
      // endDate: ['', Validators.required]
    });

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    // if (this.contractForm.valid) {
    //   const formData = this.contractForm.value;
    //   const contractData = {
    //     contractName: formData.contractName,
    //     description: formData.contractDescription,
    //     createdAt: formData.startDate
    //   }

    //   // this.chuCocody.addAnnouncement(announcementData);
    //   this.dialogRef.close(contractData);
    // }

    if (this.contractForm.valid) {
      const formData = this.contractForm.value;
      const contractData = {
        ContractTypeName: formData.contractName,
        Description: formData.contractDescription

      }
      this.httpService.httpPostReq('addcontract',contractData).pipe(
        catchError(err => {
          throw err
        })
      ).subscribe((responnse : any) =>{
        console.log('responnse',responnse)
      })
      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(contractData);
    }
  }
}
