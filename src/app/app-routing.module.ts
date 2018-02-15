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
// TODO: add ID to munch session URLs
const routes: Routes = [
  { path: 'munch/setup', component: MunchQueryComponent, canActivate: [] },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shoutouts/:id', component: ShoutOutDetailComponent},
  { path: 'shoutouts', component: ShoutOutListComponent},
  { path: 'shoutouts/create', component: ShoutOutCreateComponent, canActivate: []},
  { path: 'settings', component: UserSettingsComponent, canActivate: []},
  { path: 'munch/search/:id', component: MunchSearchComponent, canActivate: []},
  { path: 'munch/session/:id', component: MunchLiveComponent, canActivate: []},
  { path: 'munch/exit/:id', component: MunchExitComponent, canActivate: []}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


