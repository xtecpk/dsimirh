import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatExpansionModule } from "@angular/material/expansion"
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    RouterLink,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  readonly panelOpenState = signal(false);
  userService = inject(UserService);

  selectedUser: string | undefined;

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.selectedUser = user;
    })
  }

  selectedTab='overview'

}
