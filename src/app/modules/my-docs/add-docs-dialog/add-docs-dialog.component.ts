import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-docs-dialog',
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
  templateUrl: './add-docs-dialog.component.html',
  styleUrl: './add-docs-dialog.component.scss'
})
export class AddDocsDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddDocsDialogComponent>)
  docForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.docForm = this.fb.group({
      category: ['', Validators.required],
      description: ['', Validators.required],
      doc: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.docForm.valid) {
      const formData = this.docForm.value;
      const docData = {
        description: formData.description,
        category: formData.category
      }




      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(docData);
    }
  }
}
