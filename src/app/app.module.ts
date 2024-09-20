import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ColorPickerDirective, ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { LeftColumComponent } from './cv/left-colum/left-colum.component';
import { RightColumComponent } from './cv/right-colum/right-colum.component';
import { EtudeComponent } from './cv/right-colum/etude/etude.component';
import { ExperienceComponent } from './cv/right-colum/experience/experience.component';
import { HeaderComponent } from './cv/right-colum/header/header.component';
import { AutreExperienceComponent } from './cv/right-colum/autre-experience/autre-experience.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { StoreModule } from '@ngrx/store';
import { cvReducer } from './store/cv.reducer';
import { EditorComponent } from './editor/editor.component';
import { GetpdfComponent } from './getpdf/getpdf.component';
import { MyProjectGitComponent } from './cv/right-colum/my-project-git/my-project-git.component';
@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    LeftColumComponent,
    RightColumComponent,
    EtudeComponent,
    ExperienceComponent,
    HeaderComponent,
    AutreExperienceComponent,
    FormulaireComponent,
    EditorComponent,
    GetpdfComponent,
    MyProjectGitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ColorPickerModule,
    StoreModule.forRoot({ cvStore: cvReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
