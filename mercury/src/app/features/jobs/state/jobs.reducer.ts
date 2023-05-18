import { Job } from '../domain/job.type';
import { createReducer, on } from '@ngrx/store';
import { JobsActions } from './jobs.actions';
import { IState } from '../../../core/interfaces/state.interface';

export type JobsState = { jobs: ReadonlyArray<Job> } & IState;

const initialState: JobsState = {
  jobs: [],
  loading: false,
};

export const jobsReducer = createReducer(
  initialState,
  on(JobsActions.retrieveJobList, (_state, { none }) => ({ ..._state, loading: true })),
  on(JobsActions.retrieveJobListSuccessful, (_state, { jobs }) => ({ loading: false, jobs })),
);
