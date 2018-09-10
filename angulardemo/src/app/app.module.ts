import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './user/users/users.component';
import { ServersComponent } from './server/servers/servers.component';
import { ServersService } from './server/servers.service';
import { ServeService } from './serve.service';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { ServerinteractionComponent } from './serverinteraction/serverinteraction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ViewcartComponent,
    HomeComponent,
    ServerComponent,
    UserComponent,
    EditServerComponent,
    HighlightDirective,
    UsersComponent,
    ServersComponent,
    ShortenPipe,
    FilterPipe,
    ServerinteractionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutoCompleteModule
  ],
  providers: [UserService,ServersService,ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
