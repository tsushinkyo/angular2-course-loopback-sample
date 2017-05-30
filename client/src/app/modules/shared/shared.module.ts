import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MdCheckboxModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { SDKBrowserModule } from './sdk/index';

// my components
import { InputSearchComponent } from './form/input-search/input-search.component';
import { GenericFilterComponent } from './form/generic-filter/generic-filter.component';
import { GenericListComponent } from './generic-list/generic-list.component';
import { LastUpercasePipe } from './pipes/last-upercase.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdListModule,
    MdButtonModule,
    MdInputModule,
    SDKBrowserModule.forRoot()
  ],
  declarations: [
    InputSearchComponent,
    GenericFilterComponent,
    GenericListComponent,
    LastUpercasePipe
  ],
  exports: [InputSearchComponent, ReactiveFormsModule, MdButtonModule, MdInputModule,  LastUpercasePipe, GenericFilterComponent, GenericListComponent, BrowserAnimationsModule, SDKBrowserModule]
})
export class SharedModule { }
