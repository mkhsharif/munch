import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PreferenceDetailComponent } from './munch/munch-query/preferences/preference-detail/preference-detail.component';
import { PreferenceListComponent } from './munch/munch-query/preferences/preference-list/preference-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MunchLiveComponent } from './munch/munch-session/munch-live/munch-live.component';
import { MunchExitComponent } from './munch/munch-session/munch-exit/munch-exit.component';
import { ShoutOutsComponent } from './dashboard/shout-outs/shout-outs.component';
import { ShoutOutListComponent } from './dashboard/shout-outs/shout-out-list/shout-out-list.component';
import { ShoutOutDetailComponent } from './dashboard/shout-outs/shout-out-detail/shout-out-detail.component';
import { MunchQueryComponent } from './munch/munch-query/munch-query.component';
import { ShoutOutCreateComponent } from './dashboard/shout-outs/shout-out-create/shout-out-create.component';
import { ShoutOutService } from './dashboard/shout-outs/shout-out.service';
import {AuthenticationService} from './user/authentication.service';
import {UserService} from './user/user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { QueryFriendsComponent } from './munch/munch-query/query-friends/query-friends.component';
import { UserComponent } from './user/user.component';
import { MunchComponent } from './munch/munch.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardDetailComponent } from './rewards/reward-detail/reward-detail.component';
import { RewardListComponent } from './rewards/reward-list/reward-list.component';
import { UserSessionsListComponent } from './user/user-sessions-list/user-sessions-list.component';
import { UserFriendsListComponent } from './user/user-friends-list/user-friends-list.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import {AuthGuard} from './user/auth.guard';
import { MunchSessionComponent } from './munch/munch-session/munch-session.component';
import { MunchSearchComponent } from './munch/munch-session/munch-search/munch-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    RegisterComponent,
    LoginComponent,
    PreferenceDetailComponent,
    PreferenceListComponent,
    DashboardComponent,
    MunchLiveComponent,
    MunchExitComponent,
    ShoutOutsComponent,
    ShoutOutListComponent,
    ShoutOutDetailComponent,
    MunchQueryComponent,
    ShoutOutCreateComponent,
    NavigationBarComponent,
    QueryFriendsComponent,
    UserComponent,
    MunchComponent,
    RewardsComponent,
    RewardDetailComponent,
    RewardListComponent,
    UserSessionsListComponent,
    UserFriendsListComponent,
    UserSettingsComponent,
    MunchSessionComponent,
    MunchSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    ShoutOutService,
    AuthenticationService,
    UserService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
