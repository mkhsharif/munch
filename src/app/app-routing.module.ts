import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {ShoutOutDetailComponent} from './dashboard/shout-outs/shout-out-detail/shout-out-detail.component';
import {ShoutOutListComponent} from './dashboard/shout-outs/shout-out-list/shout-out-list.component';
import {ShoutOutCreateComponent} from './dashboard/shout-outs/shout-out-create/shout-out-create.component';
import {MunchQueryComponent} from './munch/munch-query/munch-query.component';
import {UserSettingsComponent} from './user/user-settings/user-settings.component';
import {CanDeactivateGuard} from './_guards/can-deactivate-guard.service';
import {UserComponent} from './user/user.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProfileComponent} from './profile/profile.component';
import {InterestsComponent} from './interests/interests.component';
import { WaitingPageComponent } from './waiting-page/waiting-page.component';
import {MunchMatchedComponent} from './munch-matched/munch-matched.component';
import {MunchActiveComponent} from './munch-active/munch-active.component';

// TODO: add ID to munch session URLs

const routes: Routes = [
  { path: 'munch/setup', component: MunchQueryComponent, canActivate: [] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shoutouts/create', component: ShoutOutCreateComponent, canActivate: []},
  { path: 'shoutouts/:id', component: ShoutOutDetailComponent},
  { path: 'shoutouts', component: ShoutOutListComponent},
  { path: 'settings', component: UserSettingsComponent, canActivate: []},
  { path: 'user', component: UserComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'interests', component: InterestsComponent},
  { path: 'waiting-page', component: WaitingPageComponent},
  { path: 'munch/match/:id', component: MunchMatchedComponent},
  { path: 'munch-active', component: MunchActiveComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
      )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {}
