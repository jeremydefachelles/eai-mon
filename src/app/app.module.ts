import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2TableModule } from 'ng2-table';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { BreadcrumbComponentComponent } from './breadcrumb-component/breadcrumb-component.component';
import { PlatformsService } from './services/platforms.service';
import { ProcessesService } from './services/processes.service';
import { FlowSelectorComponentComponent } from './flow-selector-component/flow-selector-component.component';
import { ProcessesComponentComponent } from './processes-component/processes-component.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';
//import {MdButtonModule, MdCheckboxModule,  MdSidenavModule, MdToolbarModule, MdCardModule, MdInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    BreadcrumbComponentComponent,
    FlowSelectorComponentComponent,
    ProcessesComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2TableModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
