import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { GetpdfComponent } from './getpdf/getpdf.component';

const routes: Routes = [
  {path: '', component: EditorComponent},
  {path: 'pdf', component: GetpdfComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
