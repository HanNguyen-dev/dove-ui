import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CompaniesState } from "./companies.reducer";

const selectBaseCompanies = createFeatureSelector<CompaniesState>('companies');

export const selectCompanies = createSelector(selectBaseCompanies, (_state) => [..._state.companies]);

export const selectCompaniesLoading = createSelector(selectBaseCompanies, (_state) => _state.loading);