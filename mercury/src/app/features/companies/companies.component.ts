import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCompanies, selectCompaniesLoading } from './state/companies.selectors';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {

  companies$ = this.store.select(selectCompanies);

  loading$ = this.store.select(selectCompaniesLoading);

  constructor(private store: Store) { }
}
