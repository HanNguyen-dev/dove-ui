import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MS_TO_DAY } from '../../../core/constants';
import { JobsState } from './jobs.reducer';

const selectJobs = createFeatureSelector<JobsState>('jobs');

export const selectJobsLoading = createSelector(selectJobs, (_state) => _state.loading);

export const selectJobsSummary = createSelector(selectJobs, (_state) =>
  _state.jobs
    .map(job => ({
      rejected: Number(job.status === 'REJECTED'),
      applied: Number(!!job.appliedDate),
    }))
    .reduce((x, y) => ({
      rejected: x.rejected + y.rejected,
      applied: x.applied + y.applied,
    }))
  );

export const selectJobsForTable = createSelector(selectJobs, (_state) => {
  return _state.jobs.map(job => {

    const toDate = (time: string) => time && new Date(time + 'T04:00:00Z');

    const appliedDate = toDate(job.appliedDate);
    const completedDate = toDate(job.completedDate);
    return {
      ...job,
      appliedDate: appliedDate && appliedDate.toLocaleDateString(),
      completedDate: completedDate && completedDate.toLocaleDateString(),
      duration: appliedDate &&
        Math.ceil(
          ((completedDate instanceof Date ? completedDate.getTime() : Date.now()) - appliedDate.getTime()) / MS_TO_DAY),
   }
  });
});