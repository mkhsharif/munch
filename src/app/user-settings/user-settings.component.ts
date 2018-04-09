import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    console.log('settings');
  }

  logout() {
    this.authService.logout();
  }
}
