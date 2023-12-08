import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { TestPipe } from './test.pipe';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
// import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {  Router, RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestService } from './test.service';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';
import { CurdoparationComponent } from './curdoparation/curdoparation.component';
import { MobileService } from './mobile.service';


// const routes : Routes = [
//   {
//     path : '' , component : HomeComponent
//   },
//   {
//     path : "home",component : HomeComponent
//   },
//   {
//     // path : 'about',component : AboutComponent
//   },
//   {
//     path : '**' , component : NotfoundComponent
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DirectiveComponent,
    TestPipe,
    ParentComponentComponent,
    ChildComponentComponent,
    // AboutComponent,
    HomeComponent,
    NotfoundComponent,
    TodoformComponent,
    TodolistComponent,
    CurdoparationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [TestService,TodoService,MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
