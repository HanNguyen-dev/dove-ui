import { createReducer, on } from "@ngrx/store";
import { IState } from "src/app/core/interfaces/state.interface";
import { Company } from "../domain/company.type";
import { CompaniesActions } from "./companies.actions";

export type CompaniesState = { companies: ReadonlyArray<Company> } & IState;

const initialState: CompaniesState = {
  loading: false,
  companies: [],
}

export const companiesReducer = createReducer(
  initialState,
  on(CompaniesActions.retrieveCompaniesList, (_state) => ({ ..._state, loading: true })),
  on(CompaniesActions.retrieveCompaniesListSuccessful, (_state, { companies }) => ({ loading: true, companies })),
  on(CompaniesActions.retrieveCompaniesListSuccessful, (_state) => ({ ..._state, loading: false })),
);