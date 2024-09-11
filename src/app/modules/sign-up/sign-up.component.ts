import { Component, inject, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from '../../app.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnDestroy {

  loginForm: FormGroup = new FormGroup({});
  AppComponent = AppComponent
  // chuCocody = inject(ChuCocodyComponent);
  authService = inject(AuthServiceService)

  constructor(private fb: FormBuilder) { }
  ngOnDestroy(): void {
    AppComponent.changeMode.next(false)
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      PhoneNo: ['', [Validators.required]],
      Password: ['', Validators.required],
    })
    AppComponent.changeMode.next(true)
  }

  login() {
    if(this.loginForm.valid){
      this.authService.LogInUser(this.loginForm.value)
    }
  }
  
}
