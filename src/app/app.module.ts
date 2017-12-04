import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PreferenceDetailComponent } from './munch-query/preferences/preference-detail/preference-detail.component';
import { PreferenceListComponent } from './munch-query/preferences/preference-list/preference-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MunchLiveComponent } from './munch-session/munch-live/munch-live.component';
import { MunchExitComponent } from './munch-session/munch-exit/munch-exit.component';
import { ShoutOutsComponent } from './shout-outs/shout-outs.component';
import { ShoutOutListComponent } from './shout-outs/shout-out-list/shout-out-list.component';
import { ShoutOutDetailComponent } from './shout-outs/shout-out-detail/shout-out-detail.component';
import { MunchQueryComponent } from './munch-query/munch-query.component';

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
    MunchQueryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
