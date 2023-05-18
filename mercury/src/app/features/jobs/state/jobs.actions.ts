import { createActionGroup, props } from '@ngrx/store';
import { Job } from '../domain/job.type';

export const JobsActions = createActionGroup({
  source: 'Jobs',
  events: {
    'Retrieve Job List': props<{ none?: undefined }>(),
    'Retrieve Job List Successful': props<{ jobs: ReadonlyArray<Job> }>(),
    'Retrieve Job List Failure': props<{ none: undefined}>(),
  }
});