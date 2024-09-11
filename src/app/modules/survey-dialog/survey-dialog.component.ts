import { LiveAnnouncer } from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipEditedEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';

export interface Email {
  name: string;
}
export interface Phone {
  name: string;
}
export interface Employee {
  name: string;
}

@Component({
  selector: 'app-survey-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatTabsModule,
    MatChipsModule,
    MatIcon,
    TranslateModule
  ],
  templateUrl: './survey-dialog.component.html',
  styleUrl: './survey-dialog.component.scss'
})
export class SurveyDialogComponent {

  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly emails = signal<Email[]>([]);
  readonly phones = signal<Phone[]>([]);
  readonly employees = signal<Employee[]>([]);
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our email
    if (value) {
      this.emails.update(emails => [...emails, {name: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  addPhone(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our email
    if (value) {
      this.phones.update(phones => [...phones, {name: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  addEmployee(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our email
    if (value) {
      this.employees.update(employees => [...employees, {name: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(email: Email): void {
    this.emails.update(emails => {
      const index = emails.indexOf(email);
      if (index < 0) {
        return emails;
      }

      emails.splice(index, 1);
      this.announcer.announce(`Removed ${email.name}`);
      return [...emails];
    });
  }

  removePhone(phone: Phone): void {
    this.phones.update(phones => {
      const index = phones.indexOf(phone);
      if (index < 0) {
        return phones;
      }

      phones.splice(index, 1);
      this.announcer.announce(`Removed ${phone.name}`);
      return [...phones];
    });
  }
  removeEmployee(employee: Employee): void {
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

  edit(email: Email, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove email if it no longer has a name
    if (!value) {
      this.remove(email);
      return;
    }

    // Edit existing email
    this.emails.update(emails => {
      const index = emails.indexOf(email);
      if (index >= 0) {
        emails[index].name = value;
        return [...emails];
      }
      return emails;
    });
  }

  editPhone(phone: Phone, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove phone if it no longer has a name
    if (!value) {
      this.remove(phone);
      return;
    }

    // Edit existing phone
    this.phones.update(phones => {
      const index = phones.indexOf(phone);
      if (index >= 0) {
        phones[index].name = value;
        return [...phones];
      }
      return phones;
    });
  }

  editEmployee(employee: Employee, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove phone if it no longer has a name
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


  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.fruits.update(fruits => [...fruits, {name: value}]);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // remove(fruit: Fruit): void {
  //   this.fruits.update(fruits => {
  //     const index = fruits.indexOf(fruit);
  //     if (index < 0) {
  //       return fruits;
  //     }

  //     fruits.splice(index, 1);
  //     this.announcer.announce(`Removed ${fruit.name}`);
  //     return [...fruits];
  //   });
  // }

  // edit(fruit: Fruit, event: MatChipEditedEvent) {
  //   const value = event.value.trim();

  //   // Remove fruit if it no longer has a name
  //   if (!value) {
  //     this.remove(fruit);
  //     return;
  //   }

  //   // Edit existing fruit
  //   this.fruits.update(fruits => {
  //     const index = fruits.indexOf(fruit);
  //     if (index >= 0) {
  //       fruits[index].name = value;
  //       return [...fruits];
  //     }
  //     return fruits;
  //   });
  // }

  readonly dialogRef = inject(MatDialogRef<SurveyDialogComponent>)
  surveyForm: FormGroup = new FormGroup({});
  // chuCocody = inject(ChuCocodyComponent);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      employee: ['', Validators.required]
    })

  }

  onNoClick() {
    this.dialogRef.close();
  }

  sendData() {
    if (this.surveyForm.valid) {
      const formData = this.surveyForm.value;
      const surveyData = {
        email: formData.email,
        phoneNo: formData.phoneNo
      };

      // this.chuCocody.addAnnouncement(announcementData);
      this.dialogRef.close(surveyData);
    }
  }

}
