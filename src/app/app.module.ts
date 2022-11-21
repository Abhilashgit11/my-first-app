import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './assignments/1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignments/1/success-alert/success-alert.component';
import { UsernameComponent } from './assignments/2/username/username.component';
import { DisplayDetailsComponent } from './assignments/3/display-details/display-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent, // 2.7 
    ServerComponent, // 2.7
    WarningAlertComponent, // 2.12
    SuccessAlertComponent, 
    UsernameComponent, DisplayDetailsComponent // 2.12
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
