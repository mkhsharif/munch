import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QueryOverallComponent} from './queries/query-overall/query-overall.component';

const routes: Routes = [
  { path: 'munch-setup', component: QueryOverallComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


