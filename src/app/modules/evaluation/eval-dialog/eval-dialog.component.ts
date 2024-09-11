import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../shared-component/services/user.service';

@Component({
  selector: 'app-eval-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatChipsModule,
    TranslateModule,
    RouterModule
  ],
  templateUrl: './eval-dialog.component.html',
  styleUrl: './eval-dialog.component.scss'
})
export class EvalDialogComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<EvalDialogComponent>)
  userService = inject(UserService);

  selectedUser: string | undefined;

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.selectedUser = user;
    })
  }


  onNoClick() {
    this.dialogRef.close();
  }
}
