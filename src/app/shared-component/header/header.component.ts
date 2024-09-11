import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AppComponent } from '../../app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  AppComponent = AppComponent
  // userService = inject(UserService)
  selectedLang: string='';
  toggleDrawer(){
    AppComponent.changeDrawerMode.next(false)
  }

  constructor(private translate: TranslateService) {  }
  ngOnInit(): void {
    const language :any =  localStorage.getItem('tranlation-chu')
    if(!language){
      this.switchLanguage('en')
    }else{
      this.switchLanguage(language)
    }
  }

  onChange(option: any) {
    // this.userService.changeUser(option.value);
  }

  switchLanguage(language: string) {
    this.selectedLang = language
    localStorage.setItem('tranlation-chu',language)
    this.translate.use(language);
  }
}
