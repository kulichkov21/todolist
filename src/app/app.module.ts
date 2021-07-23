import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';
import {FormsModule} from "@angular/forms";
import { FindPipe } from './pipes/find.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilteractivePipe } from './pipes/filteractive.pipe';
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    AddTaskComponent,
    TasksComponent,
    FindPipe,
    FilterPipe,
    FilteractivePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
