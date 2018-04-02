import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShoutOutsComponent } from './dashboard/shout-outs/shout-outs.component';
import { ShoutOutListComponent } from './dashboard/shout-outs/shout-out-list/shout-out-list.component';
import { ShoutOutDetailComponent } from './dashboard/shout-outs/shout-out-detail/shout-out-detail.component';
import { MunchQueryComponent } from './munch/munch-query/munch-query.component';
import { ShoutOutCreateComponent } from './dashboard/shout-outs/shout-out-create/shout-out-create.component';
import { ShoutOutService } from './_services/shout-out.service';
import {AuthenticationService} from './_services/authentication.service';
import {UserService} from './_services/user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserComponent } from './user/user.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardDetailComponent } from './rewards/reward-detail/reward-detail.component';
import { RewardListComponent } from './rewards/reward-list/reward-list.component';
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
import {UserSettingsComponent} from './user/user-settings/user-settings.component';
import { MunchMatchedClientComponent } from './munch-matched-client/munch-matched-client.component';
import { MunchActiveComponent } from './munch-active/munch-active.component';
import { MunchSetupComponent } from './munch-setup/munch-setup.component';
import { MunchMatchedHostComponent } from './munch-matched-host/munch-matched-host.component';
import { MunchMatchedComponent } from './munch-matched/munch-matched.component';
import {LocationService} from './_services/location.service';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SocketService} from './_services/socket.service';
import { TagCloudModule } from 'angular-tag-cloud-module';
import {MatCheckboxModule} from '@angular/material';
import { UserInterestsComponent } from './user-interests/user-interests.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ShoutOutsComponent,
    ShoutOutListComponent,
    ShoutOutDetailComponent,
    MunchQueryComponent,
    ShoutOutCreateComponent,
    NavigationBarComponent,
    UserComponent,
    RewardsComponent,
    RewardDetailComponent,
    RewardListComponent,
    HomepageComponent,
    ProfileComponent,
    WaitingPageComponent,
    UserSettingsComponent,
    MunchMatchedClientComponent,
    MunchActiveComponent,
    MunchSetupComponent,
    MunchMatchedHostComponent,
    MunchMatchedHostComponent,
    MunchMatchedComponent,
    LandingPageComponent,
    UserInterestsComponent,
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
    MatCheckboxModule
  ],
  providers: [
    ShoutOutService,
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
