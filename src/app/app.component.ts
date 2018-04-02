import { Component } from '@angular/core';
import { AuthenticationService } from '../app/_services/authentication.service';
import { NavigationBarComponent} from './navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Munch';

  constructor(public navbar: NavigationBarComponent) {}
}
