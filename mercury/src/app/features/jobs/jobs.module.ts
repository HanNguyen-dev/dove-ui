import { NgModule } from '@angular/core';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { StoreModule } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

import { jobsReducer } from './state/jobs.reducer';

@NgModule({
  imports: [
    JobsRoutingModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    ProgressSpinnerModule,
    CommonModule,
    // StoreModule.forFeature({ jobs: jobsReducer })
  ],
  declarations: [JobsComponent],
})
export class JobsModule {}
