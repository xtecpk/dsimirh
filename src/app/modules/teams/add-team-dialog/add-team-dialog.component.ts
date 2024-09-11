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
  selector: 'app-add-team-dialog',
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
  templateUrl: './add-team-dialog.component.html',
  styleUrl: './add-team-dialog.component.scss'
})
export class AddTeamDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddTeamDialogComponent>)
  teamForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      teamName: ['', Validators.required],
      service: ['', Validators.required],
      department: ['', Validators.required],
      searchEmployee: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.teamForm.valid) {
      const formData = this.teamForm.value;
      const teamData = {
        teamName: formData.teamName,
        service: formData.service,
        department: formData.department,
        searchEmployee: formData.searchEmployee
      }




      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(teamData);
    }
  }
}
