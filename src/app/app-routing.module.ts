import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CanDeactivateGuard} from './_guards/can-deactivate-guard.service';
import {HomepageComponent} from './homepage/homepage.component';
import {ProfileComponent} from './profile/profile.component';
import { WaitingPageComponent } from './waiting-page/waiting-page.component';
import {MunchMatchedComponent} from './munch-matched/munch-matched.component';
import {MunchSetupComponent} from './munch-setup/munch-setup.component';
import {MunchActiveComponent} from './munch-active/munch-active.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {UserSettingsComponent} from './user-settings/user-settings.component';

// TODO: add ID to munch session URLs

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'munch/setup', component: MunchSetupComponent},
  { path: 'munch/waiting/:id', component: WaitingPageComponent},
  { path: 'munch/match/:id', component: MunchMatchedComponent},
  { path: 'munch/active/:id', component: MunchActiveComponent},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'settings', component: UserSettingsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
