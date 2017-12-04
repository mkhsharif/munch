import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreferenceListComponent} from './munch-query/preferences/preference-list/preference-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MunchLiveComponent} from './munch-session/munch-live/munch-live.component';
import {MunchExitComponent} from './munch-session/munch-exit/munch-exit.component';
// TODO: add ID to munch session URLs
const routes: Routes = [
  { path: 'munch-setup', component: PreferenceListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'munch-session-live', component: MunchLiveComponent },
  { path: 'munch-session-exit', component: MunchExitComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


