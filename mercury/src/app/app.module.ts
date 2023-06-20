import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { companiesReducer } from './features/companies/state/companies.reducer';
import { CompaniesEffects } from './features/companies/state/companies.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SplitButtonModule,
    BreadcrumbModule,
    NavbarModule,
    StoreModule.forRoot({ jobs: jobsReducer, companies: companiesReducer }),
    EffectsModule.forRoot(JobsEffect, CompaniesEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
