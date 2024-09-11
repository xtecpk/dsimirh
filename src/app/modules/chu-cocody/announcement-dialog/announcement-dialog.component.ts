import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { title } from 'node:process';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChuCocodyComponent } from '../chu-cocody.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-announcement-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './announcement-dialog.component.html',
  styleUrl: './announcement-dialog.component.scss'
})
export class AnnouncementDialogComponent {

  readonly dialogRef = inject(MatDialogRef<AnnouncementDialogComponent>)
  annForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.annForm = this.fb.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
      department: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  addAnnouncement() {
    if (this.annForm.valid) {
      const formData = this.annForm.value;
      const announcementData = {
        title: formData.title,
        issueDate: '2024-06-10',
        endDate: '2024-06-20'
      };

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(announcementData);
    }
  }
}
