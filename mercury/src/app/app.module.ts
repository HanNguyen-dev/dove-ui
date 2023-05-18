import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NavbarModule } from './features/navbar/navbar.module';
import { jobsReducer } from './features/jobs/state/jobs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { JobsEffect } from './features/jobs/state/jobs.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SplitButtonModule,
    BreadcrumbModule,
    NavbarModule,
    StoreModule.forRoot({ jobs: jobsReducer }),
    EffectsModule.forRoot(JobsEffect)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
