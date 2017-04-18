import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCheckboxModule,  MdSidenavModule, MdToolbarModule, MdCardModule, MdInputModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule, MdCardModule, MdInputModule
  ],
  exports: [MdButtonModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule, MdCardModule, MdInputModule ],
  declarations: []
})
export class MyMaterialModuleModule { }
