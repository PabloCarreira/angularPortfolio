import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from 'ng2-scroll-to';
/*
import {
  MdButtonModule,
  MdCheckboxModule,
  MdTableModule,
  MdSortModule,
  MdMenuModule,
  MdIconModule,
  MdToolbarModule,
  MdListModule,
  MdCardModule,
  MdSlideToggleModule,
  MdInputModule,
  MdRadioModule,
  MdDialogModule,
} from '@angular/material';
*/
// ********************** angular-modal-gallery *****************************
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery'; //

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routes';
import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StudentsComponent } from './students/students.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PortfolioComponent,
    StudentsComponent,
    EducationComponent,
    AboutComponent,
    SkillsComponent
  ],
  entryComponents: [ ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    ScrollToModule.forRoot(),
    ModalGalleryModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
