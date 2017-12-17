import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherListDataService } from './services/teacher-list-data.service';

const appRoutes:Routes = [
  {path:'', component: TeacherListComponent}, // the root route is TeacherListComponent
]

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent // added to use TeacherListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, // added for TeacherListDataService to make REST call
    RouterModule.forRoot(appRoutes) // to use and configure routes
  ],
  providers: [TeacherListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
