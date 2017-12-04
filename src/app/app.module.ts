import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { QueryCategoryComponent } from './queries/query-category/query-category.component';
import { QueryOverallComponent } from './queries/query-overall/query-overall.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    RegisterComponent,
    LoginComponent,
    QueryCategoryComponent,
    QueryOverallComponent
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
