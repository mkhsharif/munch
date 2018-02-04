import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MunchLiveComponent} from './munch/munch-session/munch-live/munch-live.component';
import {MunchExitComponent} from './munch/munch-session/munch-exit/munch-exit.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {ShoutOutDetailComponent} from './dashboard/shout-outs/shout-out-detail/shout-out-detail.component';
import {ShoutOutListComponent} from './dashboard/shout-outs/shout-out-list/shout-out-list.component';
import {ShoutOutCreateComponent} from './dashboard/shout-outs/shout-out-create/shout-out-create.component';
import {MunchQueryComponent} from './munch/munch-query/munch-query.component';
import {UserSettingsComponent} from './user/user-settings/user-settings.component';
import {AuthGuard} from './user/auth.guard';
import {MunchSearchComponent} from './munch/munch-session/munch-search/munch-search.component';
// TODO: add ID to munch session URLs
const routes: Routes = [
  { path: 'munch-setup', component: MunchQueryComponent, canActivate: [] },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'munch-session-live', component: MunchLiveComponent, canActivate: [] },
  { path: 'munch-session-exit', component: MunchExitComponent, canActivate: []},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shoutouts/:id', component: ShoutOutDetailComponent},
  { path: 'shoutouts', component: ShoutOutListComponent},
  { path: 'create-shoutout', component: ShoutOutCreateComponent, canActivate: [] },
  { path: 'settings', component: UserSettingsComponent, canActivate: []},
  { path: 'quick-search', component: MunchSearchComponent, canActivate: []}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


