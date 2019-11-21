import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';

import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import {LightboxModule} from 'primeng/lightbox';
import {GalleriaModule} from 'primeng/galleria';

import { DataService } from './services/data.service';
import { ShareService } from './services/share.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClassDetailComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TabMenuModule,
    TabViewModule,
    LightboxModule,
    GalleriaModule,
    HttpClientModule
  ],
  providers: [DataService, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
