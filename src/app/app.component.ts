import { Component} from '@angular/core';
import { NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {RegisterComponent} from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Munch';

  constructor(public navbar: NavigationBarComponent) {}
}
