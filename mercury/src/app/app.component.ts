import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { JobsActions } from './features/jobs/state/jobs.actions';
import { CompaniesActions } from './features/companies/state/companies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mercury';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(JobsActions.retrieveJobList({}));
    this.store.dispatch(CompaniesActions.retrieveCompaniesList({}));
  }
}
