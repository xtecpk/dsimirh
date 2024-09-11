import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, Inject, Input, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipEditedEvent, MatChipsModule } from '@angular/material/chips';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

export interface Employee {
  name: string;
}
@Component({
  selector: 'app-add-bonus-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    TranslateModule,
    MatChipsModule,
    MatIcon
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-bonus-dialog.component.html',
  styleUrl: './add-bonus-dialog.component.scss'
})
export class AddBonusDialogComponent {
  @Input() fieldsToShow: string[] = []
  readonly dialogRef = inject(MatDialogRef<AddBonusDialogComponent>)
  bonusForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly employees = signal<Employee[]>([]);
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our employee
    if (value) {
      this.employees.update(employees => [...employees, {name: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(employee: Employee): void {
    this.employees.update(employees => {
      const index = employees.indexOf(employee);
      if (index < 0) {
        return employees;
      }

      employees.splice(index, 1);
      this.announcer.announce(`Removed ${employee.name}`);
      return [...employees];
    });
  }

  edit(employee: Employee, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove employee if it no longer has a name
    if (!value) {
      this.remove(employee);
      return;
    }

    // Edit existing employee
    this.employees.update(employees => {
      const index = employees.indexOf(employee);
      if (index >= 0) {
        employees[index].name = value;
        return [...employees];
      }
      return employees;
    });
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fieldsToShow = data.fieldsToShow;
    console.log(this.fieldsToShow)
  }

  ngOnInit(): void {
    this.bonusForm = this.fb.group({
      employeeName: ['', Validators.required],
      department: ['', Validators.required],
      service: ['', Validators.required],
      bonusPercentage: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.bonusForm.valid) {
      const formData = this.bonusForm.value;
      const bonusData = formData

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(bonusData);
    }
  }
}
