import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./classroom/teacher/teacher.component";
import {LoginComponent} from "./angularbt4/login.component";
import {RegisterComponent} from "./angularbt4/register.component";
import {RouterModule, Routes} from "@angular/router";
import {ThoitietComponent} from "./HNweather/thoitiet.component";
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from "./angularbt8/menu.component";
const appRoutes: Routes = [
  {path:'',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'thoitiet',component: ThoitietComponent},
  {path:'menu',component: MenuComponent},
]
@NgModule({
  declarations: [
    AppComponent, ClassroomComponent, StudentComponent, TeacherComponent, LoginComponent, RegisterComponent, ThoitietComponent, MenuComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
