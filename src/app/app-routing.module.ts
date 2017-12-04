import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreferenceListComponent} from './munch-query/preferences/preference-list/preference-list.component';

const routes: Routes = [
  { path: 'munch-setup', component: PreferenceListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


