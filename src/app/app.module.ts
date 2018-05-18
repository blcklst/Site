import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Route } from '@angular/router';
import { ChildrenOutletContexts } from '@angular/router/src/router_outlet_context';
import { routes } from './app-routing.module';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    SideBarComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule, RouterModule, RouterModule.forRoot(routes), HttpModule, FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
