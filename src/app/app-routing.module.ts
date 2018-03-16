import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MunchLiveComponent} from './munch/munch-live/munch-live.component';
import {MunchExitComponent} from './munch/munch-exit/munch-exit.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {ShoutOutDetailComponent} from './dashboard/shout-outs/shout-out-detail/shout-out-detail.component';
import {ShoutOutListComponent} from './dashboard/shout-outs/shout-out-list/shout-out-list.component';
import {ShoutOutCreateComponent} from './dashboard/shout-outs/shout-out-create/shout-out-create.component';
import {MunchQueryComponent} from './munch/munch-query/munch-query.component';
import {UserSettingsComponent} from './user/user-settings/user-settings.component';
import {MunchSearchComponent} from './munch/munch-search/munch-search.component';
import {EndQueryGuard} from './_guards/end-query.guard';
import {CanDeactivateGuard} from './_guards/can-deactivate-guard.service';
import {UserComponent} from './user/user.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProfileComponent} from './profile/profile.component';
import {MusicAffinityComponent} from './music-affinity/music-affinity.component';
import {FoodafComponent} from './foodaf/foodaf.component';
// TODO: add ID to munch session URLs
const routes: Routes = [
  { path: 'munch/setup', component: MunchQueryComponent, canActivate: [] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shoutouts/:id', component: ShoutOutDetailComponent},
  { path: 'shoutouts', component: ShoutOutListComponent},
  { path: 'shoutouts/create', component: ShoutOutCreateComponent, canActivate: []},
  { path: 'settings', component: UserSettingsComponent, canActivate: []},
  { path: 'munch/search/:id', component: MunchSearchComponent, canActivate: [], canDeactivate: [CanDeactivateGuard]},
  { path: 'munch/session/:id', component: MunchLiveComponent, canDeactivate: [CanDeactivateGuard]},
  { path: 'munch/exit/:id', component: MunchExitComponent, canActivate: [], },
  { path: 'user', component: UserComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'musicaf', component: MusicAffinityComponent},
  { path: 'foodaf', component: FoodafComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
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


