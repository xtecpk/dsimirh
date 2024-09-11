import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared-component/sidebar/sidebar.component";
import { HeaderComponent } from "./shared-component/header/header.component";
import { BehaviorSubject } from 'rxjs';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, MatSidenavModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hr-angular-front';
  isSignIn = false
  static changeMode : BehaviorSubject<boolean> = new  BehaviorSubject(false)
  static changeDrawerMode : BehaviorSubject<boolean> = new  BehaviorSubject(false)
  AppComponent = AppComponent
  @ViewChild('drawer') drawer!: MatDrawer;
  sideDrawer: boolean = false


  ngOnInit(): void {
    AppComponent.changeMode.subscribe(val => this.isSignIn = val)
    AppComponent.changeDrawerMode.subscribe(val => {
      this.drawer?.toggle()
      this.sideDrawer = !this.sideDrawer
    })


    // const language :any =  localStorage.getItem('tranlation-chu')
    // if(!language){
    //   localStorage.setItem('tranlation-chu','en')
    // }
  }


}
