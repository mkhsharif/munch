import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthenticationService} from './_services/authentication.service';
import {UserService} from './_services/user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {AuthGuard} from './_guards/auth.guard';
import {MunchRequestService} from './_services/munch-request.service';
import {SessionService} from './_services/munch-session.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CanDeactivateGuard} from './_guards/can-deactivate-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import {InterestService} from './_services/interest.service';
import { WaitingPageComponent } from './waiting-page/waiting-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserSettingsComponent} from './user-settings/user-settings.component';
import { MunchActiveComponent } from './munch-active/munch-active.component';
import { MunchSetupComponent } from './munch-setup/munch-setup.component';
import { MunchMatchedComponent } from './munch-matched/munch-matched.component';
import {LocationService} from './_services/location.service';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SocketService} from './_services/socket.service';
import { TagCloudModule } from 'angular-tag-cloud-module';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationBarComponent,
    HomepageComponent,
    ProfileComponent,
    WaitingPageComponent,
    UserSettingsComponent,
    MunchActiveComponent,
    MunchSetupComponent,
    MunchMatchedComponent,
    LandingPageComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    TagCloudModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    AuthGuard,
    MunchRequestService,
    SessionService,
    InterestService,
    CanDeactivateGuard,
    LocationService,
    SocketService,
    NavigationBarComponent,
    {provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
