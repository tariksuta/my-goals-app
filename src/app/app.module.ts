import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoalsComponent } from './goals/goals.component'; 

import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { GoalsDetailsComponent } from './goals/goals-details/goals-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule} from '@angular/common/http';



import {GoalsService} from './goals/goals.service';
import { DataStorageService} from './shared/data-storage.service';
import { GoalStartComponent } from './goals/goal-start/goal-start.component';
import { GoalsResolverService} from './goals/goals-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalsDetailsComponent,
    GoalStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule

  ],
  providers: [GoalsResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
