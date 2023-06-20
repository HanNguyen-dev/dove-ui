import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectJobsForTable, selectJobsLoading, selectJobsSummary } from './state/jobs.selectors';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsComponent {

  jobs$ = this.store.select(selectJobsForTable);

  jobsSummary$ = this.store.select(selectJobsSummary);

  loading$ = this.store.select(selectJobsLoading);

  constructor(private store: Store) {}

}
