import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreferenceListComponent} from './munch-query/preferences/preference-list/preference-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MunchLiveComponent} from './munch-session/munch-live/munch-live.component';
import {MunchExitComponent} from './munch-session/munch-exit/munch-exit.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ShoutOutDetailComponent} from './dashboard/shout-outs/shout-out-detail/shout-out-detail.component';
import {ShoutOutListComponent} from './dashboard/shout-outs/shout-out-list/shout-out-list.component';
import {ShoutOutCreateComponent} from './dashboard/shout-outs/shout-out-create/shout-out-create.component';
// TODO: add ID to munch session URLs
const routes: Routes = [
  { path: 'munch-setup', component: PreferenceListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'munch-session-live', component: MunchLiveComponent },
  { path: 'munch-session-exit', component: MunchExitComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'shoutouts/:id', component: ShoutOutDetailComponent},
  { path: 'shoutouts', component: ShoutOutListComponent},
  { path: 'create-shoutout', component: ShoutOutCreateComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


